import { ChangeEvent } from 'react';

type StarInputProps = {
  id: number;
  title: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

function StarInput({id, title, checked, handleChange, isDisabled}: StarInputProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={id}
        id={`${id}-stars`}
        type="radio"
        onChange={handleChange}
        checked={checked}
        disabled={isDisabled}
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
