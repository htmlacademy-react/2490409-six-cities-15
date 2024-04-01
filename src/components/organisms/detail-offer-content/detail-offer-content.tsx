import { Gallery, GoodsList, Host, Map, OfferFeatures, OffersList, ReviewsSection} from '../../molecules';
import { BookmarkIcon, PremiumLabel, Price, Rating} from '../../atoms';
import { CommentData, IconsAndLabelsStyleClassType, LocationType, OfferData, OfferDetailData } from '../../../types';
import { ReactElement } from 'react';
import './detail-offer-content.css';

type LocationWithIdType = LocationType & {id: string};

type DetailOfferContentProps = {
  offer: OfferDetailData;
  elementsType: IconsAndLabelsStyleClassType;
  reviews: CommentData[] | null;
  nearbyOffers: OfferData[] | null;
  nearbyLocations: LocationWithIdType[] | null;
};

const MAP_STYLE = {maxWidth: '60%'};

function DetailOfferContent(
  {offer, elementsType, reviews, nearbyOffers, nearbyLocations}: DetailOfferContentProps
): ReactElement {
  const currentLocation = {...offer.location, id: offer.id};
  const currentLocationAndNearby = [...(nearbyLocations ?? []), currentLocation];

  return (
    <>
      <section className="offer">
        <Gallery images={offer.images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && <PremiumLabel type={elementsType}/>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <BookmarkIcon id={offer.id} size="medium" isActive={offer.isFavorite} type={elementsType}/>
            </div>
            <Rating rating={offer.rating} type={elementsType} showValue/>
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
              style={MAP_STYLE}
              locations={currentLocationAndNearby}
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
                classNames="near-places__list places__list"
                placeType="near-places"
                hasVerticalLayout
              />
            </section>
          </div>
      }
    </>
  );
}

export default DetailOfferContent;
