import {ChangeEvent} from 'react';

type StarInputProps = {
  id: 1 | 2 | 3 | 4 | 5;
  title: 'perfect' | 'good' | 'not bad' | 'badly' | 'terribly';
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function StarInput({id, title, handleOnChange}: StarInputProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={id}
        id={`${id}-stars`}
        type="radio"
        onChange={handleOnChange}
      />
      <label
        htmlFor={`${id}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

export default StarInput;
