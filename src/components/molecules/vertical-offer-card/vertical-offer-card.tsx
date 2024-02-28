import {PremiumLabel, BookmarkIcon, Rating} from '../../atoms';
import { Link } from 'react-router-dom';
import { OfferData } from '../../../mocks';
import { ReactElement } from 'react';
import { APP_ROUTE } from '../../../constants';

type OfferCardVerticalProps = Omit<OfferData, 'city' | 'location'> & {
  onMouseOver: (id: string) => void;
};

function VerticalOfferCard(props: OfferCardVerticalProps): ReactElement {
  const getOfferLink = (id: string) => APP_ROUTE.Offer.replace(':id', id);

  return (
    <article className="cities__card place-card" onMouseOver={props.onMouseOver.bind(null, props.id)}>
      {props.isPremium && <PremiumLabel/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={getOfferLink(props.id)}>
          <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkIcon isActive={props.isFavorite}/>
        </div>
        <Rating rating={props.rating} />
        <h2 className="place-card__name">
          <Link to="#">{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default VerticalOfferCard;
