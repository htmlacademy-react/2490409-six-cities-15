import { ReviewComment } from '../index.ts';
import { CommentData } from '../../../types';

type ReviewsListProps = {
  reviews: CommentData[];
};

const prepareReviews = (reviews: CommentData[]) => (
  reviews
    .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)
);

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {
        prepareReviews(reviews)
          .map((review) => <ReviewComment key={review.id} review={review}/>)
      }
    </ul>
  );
}

export default ReviewsList;
