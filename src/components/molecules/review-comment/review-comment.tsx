import { CommentData } from '../../../types';
import { Rating } from '../../atoms';
import './review-comment.css';

type ReviewCommentProps = {
  review: CommentData;
};

const DATE_FORMAT = { month: 'long', year: 'numeric' } as const;

function ReviewComment({review}: ReviewCommentProps) {
  const datetime = new Date(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} type={'reviews'}/>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {datetime.toLocaleDateString('en', DATE_FORMAT)}
        </time>
      </div>
    </li>
  );
}

export default ReviewComment;
