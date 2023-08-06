package clog

import "golang.org/x/exp/slog"

// ErrorEvent is an interface for Error Reporting.
// See https://cloud.google.com/error-reporting/docs/formatting-error-messages#log-error
type ErrorEvent interface {
	ServiceContext() *ServiceContext
	ErrorContext() *ErrorContext

	// Stack must be return value of runtime.Stack or debug.Stack.
	// See https://pkg.go.dev/runtime/debug#Stack
	Stack() []byte
}

type ServiceContext struct {
	Service      string
	Version      string
	ResourceType string
}

func (c *ServiceContext) LogValue() slog.Value {
	return slog.GroupValue(
		slog.String("service", c.Service),
		slog.String("version", c.Version),
		slog.String("resourceType", c.ResourceType),
	)
}

type ErrorContext struct {
	HTTPRequest      *HTTPRequestContext
	User             string
	ReportLocation   *ReportLocation
	SourceReferences []*SourceReference
}

// TODO
func (c *ErrorContext) LogValue() slog.Value {
	return slog.GroupValue()
}

// TODO
type HTTPRequestContext struct{}
type ReportLocation struct{}
type SourceReference struct{}