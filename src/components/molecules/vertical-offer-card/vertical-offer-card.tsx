import {PremiumLabel, BookmarkIcon, Rating, Price} from '../../atoms';
import { Link } from 'react-router-dom';
import { OfferData } from '../../../mocks';
import { ReactElement } from 'react';
import { APP_ROUTE } from '../../../constants';
import {PlaceStyleType} from '../../../types';
import {capitalize} from '../../../utils';

type OfferCardVerticalProps = Omit<OfferData, 'city' | 'location'> & {
  onMouseOver: (id?: string) => void;
  onMouseOut: () => void;
  placeType?: PlaceStyleType;
};

function VerticalOfferCard(props: OfferCardVerticalProps): ReactElement {
  const getOfferLink = (id: string) => APP_ROUTE.Offer.replace(':id', id);
  const placeType = props.placeType || 'cities';

  return (
    <article
      className={`${placeType}__card place-card`}
      onMouseOver={props.onMouseOver.bind(null, props.id)}
      onMouseOut={props.onMouseOut}
    >
      {props.isPremium && <PremiumLabel/>}
      <div className={`${placeType}__image-wrapper place-card__image-wrapper`}>
        <Link to={getOfferLink(props.id)}>
          <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
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

export default VerticalOfferCard;
