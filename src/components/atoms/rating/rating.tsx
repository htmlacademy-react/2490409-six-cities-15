import { IconsAndLabelsStyleClassType } from '../../../types';

type RatingProps = {
  rating: number;
  type?: IconsAndLabelsStyleClassType;
  showValue?: boolean;
};

function Rating({ rating, type = 'place-card', showValue = false }: RatingProps) {

  return (
    <div className={`${type}__rating rating`} data-testid="rating">
      <div className={`${type}__stars rating__stars`}>
        <span style={{width: `${Math.round(rating) * 20}%`}} data-testid="rating-stars"></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && <span className={`${type}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default Rating;
