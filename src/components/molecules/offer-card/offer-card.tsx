import { PremiumLabel, BookmarkIcon, Rating, Price } from '../../atoms';
import { Link } from 'react-router-dom';
import { OfferData } from '../../../mocks';
import { ReactElement } from 'react';
import { APP_ROUTE } from '../../../constants';
import { capitalize } from '../../../utils';
import classNames from 'classnames';

type OfferCardVerticalProps = Omit<OfferData, 'city' | 'location'> & {
  onMouseOver?: (id?: string) => void;
  onMouseOut?: () => void;
  placeType: 'cities' | 'near-places' | 'favorites';
  hasVerticalLayout: boolean;
};

function OfferCard({
  onMouseOver = () => {},
  onMouseOut = () => {},
  ...props
}: OfferCardVerticalProps): ReactElement {
  const getOfferLink = (id: string) => APP_ROUTE.Offer.replace(':id', id);

  const previewImageSize = props.hasVerticalLayout
    ? { width: 260, height: 200 }
    : { width: 150, height: 110 };

  const infoClassName = classNames(
    'place-card__info',
    {'favorites__card-info': props.placeType === 'favorites'},
  );

  return (
    <article
      className={`${props.placeType}__card place-card`}
      onMouseOver={onMouseOver.bind(null, props.id)}
      onMouseOut={onMouseOut}
    >
      {props.isPremium && <PremiumLabel/>}
      <div className={`${props.placeType}__image-wrapper place-card__image-wrapper`}>
        <Link to={getOfferLink(props.id)}>
          <img
            className="place-card__image"
            src={props.previewImage}
            width={previewImageSize.width}
            height={previewImageSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <Price price={props.price} />
          <BookmarkIcon isActive={props.isFavorite} size={{ width: 18, height: 19 }}/>
        </div>
        <Rating rating={props.rating} />
        <h2 className="place-card__name">
          <Link to={getOfferLink(props.id)}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(props.type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
