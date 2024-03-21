import { RatingButton } from '../../molecules';
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/helpers.ts';
import { addCommentAction} from '../../../store/slices/offers/thunk.ts';
import { offerSelectors } from '../../../store/slices/offers';

type THandleOnChange = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

function ReviewForm() {
  const dispatch = useAppDispatch();
  const initialReviewState = {rating: 0, comment: ''};
  const [review, setReview] = useState(initialReviewState);

  const handleOnChange: THandleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setReview({
      ...review,
      [name]: isNaN(Number(value)) ? value : Number(value),
    });
  };


  const offerId = useAppSelector(offerSelectors.detailOffer)?.id || '';

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    dispatch(
      addCommentAction({
        id: offerId,
        comment: review.comment,
        rating: review.rating,
      })
    );

    setReview(initialReviewState);
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingButton handleOnChange={handleOnChange} value={review.rating} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleOnChange}
      />
      <div className="reviews__button-wrapper" >
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
