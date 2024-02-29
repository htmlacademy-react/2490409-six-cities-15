import { CommentData } from '../../../mocks';
import {ReviewComment, ReviewForm} from '..';

type ReviewsSectionProps = {
  reviews: CommentData[];
};

function ReviewsSection({reviews}: ReviewsSectionProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewComment key={review.id} review={review} />)}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewsSection;
