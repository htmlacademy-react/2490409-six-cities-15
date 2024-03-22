import { CommentData } from '../../../types';
import { ReviewForm, ReviewsList } from '..';
import { useAuthStatus } from '../../../hooks';
import { AUTH_STATUS } from '../../../constants';

type ReviewsSectionProps = {
  reviews: CommentData[] | null;
};

function ReviewsSection({reviews}: ReviewsSectionProps) {
  // todo: check how section looks with 0 reviews
  // const reviews: CommentData[] = [];
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews ? reviews.length : 0}</span>
      </h2>
      {reviews && reviews.length > 0 && <ReviewsList reviews={reviews} />}
      {useAuthStatus() === AUTH_STATUS.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewsSection;
