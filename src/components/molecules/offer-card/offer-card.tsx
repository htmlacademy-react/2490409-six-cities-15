import { PremiumLabel, BookmarkIcon } from '../../atoms';
import { Link } from 'react-router-dom';

type RentOffer = {
  // id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  // city: {
  //   name: string;
  //   location: {
  //     latitude: number;
  //     longitude: number;
  //     zoom: number;
  //   };
  // };
  // location: {
  //   latitude: number;
  //   longitude: number;
  //   zoom: number;
  // };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

function OfferCard(props: RentOffer) {
  return (
    <article className="cities__card place-card">
      {props.isPremium && <PremiumLabel/>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={props.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkIcon isFavourite={props.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${props.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
export type { RentOffer };
