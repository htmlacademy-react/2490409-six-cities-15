import {BookmarkIcon, PremiumLabel, Price, Rating} from '../../atoms';
import { OfferData } from '../../../mocks';
import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../../../constants';

type OfferCardHorizontalProps = Omit<OfferData, 'city' | 'location'>;

function HorizontalOfferCard(props: OfferCardHorizontalProps) {
  // todo: remove duplicate in vertical-offer-card.tsx
  const getOfferLink = (id: string) => APP_ROUTE.Offer.replace(':id', id);

  return (
    <article className="favorites__card place-card">
      <PremiumLabel/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={getOfferLink(props.id)}>
          <img
            className="place-card__image"
            src={props.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <Price price={props.price} />
          <BookmarkIcon isActive size={{ width: 18, height: 19 }}/>
        </div>
        <Rating rating={props.rating} />
        <h2 className="place-card__name">
          <Link to={getOfferLink(props.id)}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default HorizontalOfferCard;

