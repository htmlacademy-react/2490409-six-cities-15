import { RatingButton } from '../../molecules';
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useCallback, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/helpers.ts';
import { addCommentAction } from '../../../store/slices/offers/thunk.ts';
import { offersSelectors } from '../../../store/slices/offers';
import { REQUEST_STATUS } from '../../../constants';

type HandleOnChangeType = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

function ReviewForm() {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleChange: HandleOnChangeType = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setRating(Number(e.currentTarget.value));
  }, []);


  const offerId = useAppSelector(offersSelectors.detailOffer)?.id || '';

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!commentRef.current) {
      return;
    }

    dispatch(
      addCommentAction({
        id: offerId,
        comment: commentRef.current.value,
        rating,
      })
    )
      .unwrap()
      .then(() => {
        setRating(rating);
      });
  };

  const isLoading = useAppSelector(offersSelectors.reviewRequestStatus) === REQUEST_STATUS.Loading;

  const comment = commentRef.current?.value ?? '';

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingButton handleChange={handleChange} value={rating} isDisabled={isLoading}/>
      </div>
      <textarea
        ref={commentRef}
        id="comment"
        name="comment"
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isLoading}
      />
      <div className="reviews__button-wrapper" >
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b> and no longer than <b className="reviews__text-amount">300 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            comment.length > 300 || comment.length < 50
            || rating <= 0
            || isLoading
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
