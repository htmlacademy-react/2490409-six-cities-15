import { IconsAndLabelsStyleClassType } from '../../../types';
import { useMemo } from 'react';

type RatingProps = {
  rating: number;
  type?: IconsAndLabelsStyleClassType;
  showValue?: boolean;
};

function Rating({ rating, type = 'place-card', showValue = false }: RatingProps) {
  const style = useMemo(() => ({width: `${Math.round(rating) * 20}%`}), [rating]);

  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={style}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && <span className={`${type}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default Rating;
