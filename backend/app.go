package backend

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/nownabe/golink/backend/middleware"
	"github.com/nownabe/golink/go/clog"
	"github.com/nownabe/golink/go/errors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

const (
	readHeaderTimeoutSeconds = 10
	shutdownTimeoutSeconds   = 120
)

type App interface {
	Run(ctx context.Context) error
}

// New returns a new backend app.
func New(
	port string,
	allowedOrigins []string,
	tracerName string,
	apiPrefix string,
	consolePrefix string,
	firestoreClient *firestore.Client,
	debug bool,
	localConsoleURL string,
	dummyUserEmail string,
	dummyUserID string,
) App {
	repo := &repository{firestoreClient}
	h := handler(repo, apiPrefix, consolePrefix, debug)
	for _, m := range middlewares(allowedOrigins, tracerName, consolePrefix, localConsoleURL, dummyUserEmail, dummyUserID) {
		h = m(h)
	}

	return &app{
		port:    port,
		handler: h,
	}
}

func handler(
	repo *repository,
	apiPrefix string,
	consolePrefix string,
	debug bool,
) http.Handler {
	rh := newRedirectHandler(repo, consolePrefix)
	ah := newAPIHandler(repo, debug)
	hh := newHealthHandler()

	mux := http.NewServeMux()
	// https://connectrpc.com/docs/go/routing#prefixing-routes
	mux.Handle(apiPrefix+"/", http.StripPrefix(apiPrefix, ah))
	mux.Handle("/healthz", hh)
	mux.Handle("/", rh)

	h2s := &http2.Server{}
	return h2c.NewHandler(mux, h2s)
}

func middlewares(allowedOrigins []string, tracerName, consolePrefix, localConsoleURL, dummyUserEmail, dummyUserID string) []middleware.Middleware {
	ms := []middleware.Middleware{
		// innermost
		middleware.NewLocalConsoleRedirector(consolePrefix, localConsoleURL),
		middleware.NewCORS(allowedOrigins),
		middleware.NewRequestID(),
		middleware.NewTraceContext(tracerName),
		middleware.NewRecoverer(),
		middleware.NewDummyUser(dummyUserEmail, dummyUserID),
		// outermost
	}

	return ms
}

type app struct {
	port    string
	handler http.Handler
}

func (a *app) Run(ctx context.Context) error {
	return a.serve(ctx)
}

func (a *app) serve(ctx context.Context) error {
	s := &http.Server{
		Addr:              ":" + a.port,
		Handler:           a.handler,
		ReadHeaderTimeout: readHeaderTimeoutSeconds * time.Second,
	}

	idleConnsClosed := make(chan struct{})

	go func() {
		ch := make(chan os.Signal, 1)
		signal.Notify(ch, syscall.SIGTERM, syscall.SIGINT)

		sig := <-ch
		clog.Noticef(ctx, "received signal %v and terminating", sig)

		ctx, cancel := context.WithTimeout(context.Background(), shutdownTimeoutSeconds*time.Second)
		defer cancel()

		if err := s.Shutdown(ctx); err != nil {
			err := errors.Wrap(err, "failed to shutdown gracefully")
			clog.Err(ctx, err)
		}

		clog.Notice(ctx, "completed shutdown gracefully")
		close(idleConnsClosed)
	}()

	clog.Notice(ctx, "starting to listen and serve")

	if err := s.ListenAndServe(); err != http.ErrServerClosed {
		return errors.Wrap(err, "failed to listen and serve")
	}

	<-idleConnsClosed

	return nil
}
