import { ReactElement } from 'react';
import { Header } from '../../organisms';
import { Gallery, GoodsList, Host, Map, OfferFeatures, ReviewsSection, OffersList } from '../../molecules';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import { BookmarkIcon, PremiumLabel, Price, Rating } from '../../atoms';

type OfferScreenProps = {
  offer: OfferDetailData;
  reviews: CommentData[];
  otherPlacesNear: OfferData[];
};

function OfferPage({offer, reviews, otherPlacesNear}: OfferScreenProps): ReactElement {
  const elementsType = 'offer';
  const placesNear = otherPlacesNear.map((place) => (
    {...place.location, id: place.id}
  ));

  const placesNearAndCurrent = [...placesNear, {...offer.location, id: offer.id}];

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={offer.images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel type={elementsType}/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <BookmarkIcon size={{width: 31, height: 33}} isActive={offer.isFavorite}/>
              </div>
              <Rating rating={offer.rating} type={elementsType}/>
              <OfferFeatures maxAdultsCount={offer.maxAdults} bedroomsCount={offer.bedrooms} housingType={offer.type}/>
              <Price price={offer.price} type={'offer'}/>
              <GoodsList goods={offer.goods}/>
              <Host user={offer.host} description={offer.description}/>
              <ReviewsSection reviews={reviews}/>
            </div>
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Map
              classType="offer"
              style={{maxWidth: '60%'}}
              locations={placesNearAndCurrent}
              city={offer.city}
              selectedCardId={offer.id}
            />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList
              offers={otherPlacesNear}
              classNames={'near-places__list places__list'}
              placeType={'near-places'}
              hasVerticalLayout
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
