import { RatingButton } from '../../molecules';
import {ChangeEvent, ChangeEventHandler, useState} from 'react';

type THandleOnChange = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

function ReviewForm() {
  const [review, setReview] = useState({rating: 0, comment: ''});

  const handleOnChange: THandleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setReview({
      ...review,
      [name]: isNaN(Number(value)) ? value : Number(value),
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingButton handleOnChange={handleOnChange}/>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleOnChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.comment.length < 50 || review.rating <= 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
