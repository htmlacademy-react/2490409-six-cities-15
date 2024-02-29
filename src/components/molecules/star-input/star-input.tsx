type StarInputProps = {
  id: number;
};

function StarInput({id}: StarInputProps) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={id}
        id={`${id}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${id}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

export default StarInput;
