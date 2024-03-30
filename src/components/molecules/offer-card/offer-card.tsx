import { PremiumLabel, BookmarkIcon, Rating, Price } from '../../atoms';
import { Link } from 'react-router-dom';
import { OfferData } from '../../../types';
import { ReactElement } from 'react';
import { APP_ROUTE } from '../../../constants';
import { capitalize } from '../../../utils';
import classNames from 'classnames';
import { OfferCardStyleClassType } from '../../../types';

type OfferCardProps = Omit<OfferData, 'city' | 'location'> & {
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
  placeType: OfferCardStyleClassType;
  hasVerticalLayout: boolean;
};

function OfferCard({
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  ...props
}: OfferCardProps): ReactElement {
  const offerLink = APP_ROUTE.Offer.replace(':id', props.id);

  const previewImageSize = props.hasVerticalLayout
    ? { width: 260, height: 200 }
    : { width: 150, height: 110 };

  const infoClassName = classNames(
    'place-card__info',
    {'favorites__card-info': props.placeType === 'favorites'},
  );

  const handleMouseEnter = () => onMouseEnter(props.id);

  return (
    <Link to={offerLink}>
      <article
        className={`${props.placeType}__card place-card`}
        onMouseEnter={handleMouseEnter}
        onMouseOut={onMouseLeave}
      >
        {props.isPremium && <PremiumLabel/>}
        <div className={`${props.placeType}__image-wrapper place-card__image-wrapper`}>

          <img
            className="place-card__image"
            src={props.previewImage}
            width={previewImageSize.width}
            height={previewImageSize.height}
            alt="Place image"
          />
        </div>
        <div className={infoClassName}>
          <div className="place-card__price-wrapper">
            <Price price={props.price} />
            <BookmarkIcon isActive={props.isFavorite} size={{ width: 18, height: 19 }}/>
          </div>
          <Rating rating={props.rating} />
          <h2 className="place-card__name">
            {props.title}
          </h2>
          <p className="place-card__type">{capitalize(props.type)}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
