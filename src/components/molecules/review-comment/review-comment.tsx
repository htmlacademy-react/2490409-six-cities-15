import {CommentData} from '../../../mocks';
import {Rating} from '../../atoms';

type ReviewCommentProps = {
  review: CommentData;
};

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
          {datetime.toLocaleDateString('en', { day: 'numeric', month: 'long' })}
        </time>
      </div>
    </li>
  );
}

export default ReviewComment;
