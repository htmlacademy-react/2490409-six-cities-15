import { Gallery, GoodsList, Host, Map, OfferFeatures, OffersList, ReviewsSection} from '../../molecules';
import { BookmarkIcon, PremiumLabel, Price, Rating} from '../../atoms';
import { CommentData, IconsAndLabelsStyleClassType, LocationType, OfferData, OfferDetailData } from '../../../types';
import { ReactElement} from 'react';
import './detail-offer-content.css';

type LocationWithIdType = LocationType & {id: string};

type DetailOfferContentProps = {
  offer: OfferDetailData;
  elementsType: IconsAndLabelsStyleClassType;
  reviews: CommentData[] | null;
  nearbyOffers: OfferData[] | null;
  nearbyLocations: LocationWithIdType[] | null;
  currentLocation: LocationWithIdType;
};

function DetailOfferContent(
  {offer, elementsType, reviews, nearbyOffers, nearbyLocations, currentLocation}: DetailOfferContentProps
): ReactElement {
  return (
    <>
      <section className="offer">
        <Gallery images={offer.images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <PremiumLabel type={elementsType}/>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <BookmarkIcon id={offer.id} size={{width: 31, height: 33}} isActive={offer.isFavorite}/>
            </div>
            <Rating rating={offer.rating} type={elementsType}/>
            <OfferFeatures maxAdultsCount={offer.maxAdults} bedroomsCount={offer.bedrooms} housingType={offer.type}/>
            <Price price={offer.price} type={'offer'}/>
            <GoodsList goods={offer.goods}/>
            <Host user={offer.host} description={offer.description}/>
            <ReviewsSection reviews={reviews}/>
          </div>
        </div>
        {
          nearbyLocations &&
          nearbyOffers &&
          <div className="detail-offer__map-container">
            <Map
              classType="offer"
              style={{maxWidth: '60%'}}
              locations={[...nearbyLocations, currentLocation]}
              city={offer.city}
              selectedCardId={offer.id}
            />
          </div>
        }
      </section>
      {
        nearbyOffers &&
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList
                offers={nearbyOffers}
                classNames={'near-places__list places__list'}
                placeType={'near-places'}
                hasVerticalLayout
              />
            </section>
          </div>
      }
    </>
  );
}

export default DetailOfferContent;
