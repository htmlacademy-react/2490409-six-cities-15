import { ComponentStyleType } from '../../../types';

type RatingProps = {
  rating: number;
  type?: ComponentStyleType;
};

function Rating({ rating, type = 'place-card' }: RatingProps) {
  return (
    <div className={`${type}__rating rating`}>
      <div className={`${type}__stars rating__stars`}>
        <span style={{width: `${rating * 20}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
