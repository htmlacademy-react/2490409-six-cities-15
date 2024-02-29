import { CommentData } from '../../../mocks';
import {ReviewComment, ReviewForm} from '..';
import {getAuthStatus} from '../../../routing';
import {AUTH_STATUS} from '../../../constants';

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
      {getAuthStatus() === AUTH_STATUS.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewsSection;
