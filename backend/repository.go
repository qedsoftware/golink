package backend

import (
	"context"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/nownabe/golink/go/clog"
	"github.com/nownabe/golink/go/errors"
	"google.golang.org/api/iterator"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const collectionName = "golinks"

var errDocumentNotFound = errors.NewWithoutStack("document not found")

type repository struct {
	firestore *firestore.Client
}

func (r *repository) Transaction(
	ctx context.Context,
	f func(ctx context.Context, tx *firestore.Transaction) error,
) error {
	return r.firestore.RunTransaction(ctx, f)
}

func (r *repository) TxExists(ctx context.Context, tx *firestore.Transaction, name string) (bool, error) {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	s, err := tx.Get(doc)
	if status.Code(err) == codes.NotFound {
		return false, nil
	}
	if err != nil {
		return false, errors.Wrapf(err, "failed to get %s", doc.Path)
	}

	return s.Exists(), nil
}

func (r *repository) Get(ctx context.Context, name string) (*dto, error) {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	s, err := doc.Get(ctx)
	if status.Code(err) == codes.NotFound {
		return nil, errors.Wrapf(errDocumentNotFound, "%s not found", doc.Path)
	}

	if err != nil {
		return nil, errors.Wrapf(err, "failed to get %s", doc.Path)
	}
	var o dto
	if err := s.DataTo(&o); err != nil {
		return nil, errors.Wrapf(err, "failed to populate %s", doc.Path)
	}

	return &o, nil
}

func (r *repository) TxGet(ctx context.Context, tx *firestore.Transaction, name string) (*dto, error) {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	s, err := tx.Get(doc)
	if status.Code(err) == codes.NotFound {
		return nil, errors.Wrapf(errDocumentNotFound, "%s not found", doc.Path)
	}
	if err != nil {
		return nil, errors.Wrapf(err, "failed to get %s", doc.Path)
	}

	var o dto
	if err := s.DataTo(&o); err != nil {
		return nil, errors.Wrapf(err, "failed to populate %s", doc.Path)
	}

	return &o, nil
}

func (r *repository) TxCreate(ctx context.Context, tx *firestore.Transaction, dto *dto) error {
	col := r.collection()
	doc := col.Doc(dto.ID())

	dto.CreatedAt = time.Now()
	dto.UpdatedAt = time.Now()

	if err := tx.Create(doc, dto); err != nil {
		return errors.Wrapf(err, "failed to create %s", doc.Path)
	}

	return nil
}

func (r *repository) ListByOwner(ctx context.Context, owner string) ([]*dto, error) {
	col := r.collection()
	iter := col.Where("owners", "array-contains", owner).Documents(ctx)
	defer iter.Stop()

	var dtos []*dto
	for {
		s, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, errors.Wrapf(err, "failed to iterate %s", col.Path)
		}

		var o dto
		if err := s.DataTo(&o); err != nil {
			return nil, errors.Wrapf(err, "failed to populate %s", s.Ref.Path)
		}

		dtos = append(dtos, &o)
	}

	return dtos, nil
}

func (r *repository) ListByURL(ctx context.Context, url string) ([]*dto, error) {
	col := r.collection()
	iter := col.Where("url", "==", url).Documents(ctx)
	defer iter.Stop()

	var dtos []*dto
	for {
		s, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, errors.Wrapf(err, "failed to iterate %s", col.Path)
		}

		var o dto
		if err := s.DataTo(&o); err != nil {
			return nil, errors.Wrapf(err, "failed to populate %s", s.Ref.Path)
		}

		dtos = append(dtos, &o)
	}

	return dtos, nil
}

func (r *repository) TxUpdate(ctx context.Context, tx *firestore.Transaction, dto *dto) error {
	col := r.collection()
	doc := col.Doc(dto.ID())

	dto.UpdatedAt = time.Now()

	if err := tx.Update(doc, []firestore.Update{
		{Path: "url", Value: dto.URL},
		{Path: "redirect_count_28days", Value: dto.RedirectCount28Days},
		{Path: "redirect_count_7days", Value: dto.RedirectCount7Days},
		{Path: "redirect_count_calculated_date", Value: dto.RedirectCountCalculatedDate},
		{Path: "daily_redirect_counts", Value: dto.DailyRedirectCounts},
		{Path: "updated_at", Value: dto.UpdatedAt},
	}); err != nil {
		return errors.Wrapf(err, "failed to update %s", doc.Path)
	}

	return nil
}

func (r *repository) TxDelete(ctx context.Context, tx *firestore.Transaction, name string) error {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	if err := tx.Delete(doc); err != nil {
		return errors.Wrapf(err, "failed to delete %s", doc.Path)
	}

	return nil
}

func (r *repository) TxAddOwner(ctx context.Context, tx *firestore.Transaction, name string, owner string) error {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	if err := tx.Update(doc, []firestore.Update{
		{Path: "owners", Value: firestore.ArrayUnion(owner)},
		{Path: "updated_at", Value: time.Now()},
	}); err != nil {
		return errors.Wrapf(err, "failed to update %s", doc.Path)
	}

	return nil
}

func (r *repository) TxRemoveOwner(ctx context.Context, tx *firestore.Transaction, name string, owner string) error {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	if err := tx.Update(doc, []firestore.Update{
		{Path: "owners", Value: firestore.ArrayRemove(owner)},
		{Path: "updated_at", Value: time.Now()},
	}); err != nil {
		return errors.Wrapf(err, "failed to update %s", doc.Path)
	}

	return nil
}

func (r *repository) incrementCount(ctx context.Context, name string) {
	col := r.collection()
	doc := col.Doc(nameToID(name))

	_, err := doc.Update(ctx, []firestore.Update{
		{
			Path:  "redirect_count",
			Value: firestore.Increment(1),
		},
	})
	if err != nil {
		err := errors.Wrapf(err, "failed to increment redirect_count of %s", doc.Path)
		clog.Err(ctx, err)
	}
}

func (r *repository) collection() *firestore.CollectionRef {
	return r.firestore.Collection(collectionName)
}
