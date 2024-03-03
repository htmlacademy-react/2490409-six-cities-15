import { ReviewComment } from '../index.ts';
import { CommentData } from '../../../mocks';

type ReviewsListProps = {
  reviews: CommentData[];
};

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewComment key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewsList;
