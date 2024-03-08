import { ReactElement } from 'react';
import { Header } from '../../organisms';
import { Gallery, GoodsList, Host, OfferFeatures, ReviewsSection, VerticalOfferCard } from '../../molecules';
import { CommentData, OfferData, OfferDetailData } from '../../../mocks';
import { BookmarkIcon, PremiumLabel, Price, Rating } from '../../atoms';

type OfferScreenProps = {
  offer: OfferDetailData;
  reviews: CommentData[];
  otherPlacesNear: OfferData[];
};

function OfferScreen({offer, reviews, otherPlacesNear}: OfferScreenProps): ReactElement {
  const elementsType = 'offer';

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={offer.images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel type={elementsType} />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <BookmarkIcon size={{ width: 31, height: 33}} isActive={offer.isFavorite}/>
              </div>
              <Rating rating={offer.rating} type={elementsType} />
              <OfferFeatures maxAdultsCount={offer.maxAdults} bedroomsCount={offer.bedrooms} housingType={offer.type} />
              <Price price={offer.price} type={'offer'}/>
              <GoodsList goods={offer.goods} />
              <Host user={offer.host} description={offer.description} />
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
          <section className="offer__map map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {otherPlacesNear.map((place) => (
                <VerticalOfferCard
                  {...place}
                  key={place.id}
                  onMouseOver={()=> {}}
                  onMouseOut={() => {}}
                  placeType={'near-places'}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
