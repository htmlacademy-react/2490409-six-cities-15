import { ReactElement } from 'react';
import { Header } from '../../organisms';
import { OfferCard, CityTabs, SortSelector } from '../../molecules';
import { OfferData } from '../../../mocks';

type MainScreenProps = {
  rentOfferCount: number;
  offers: OfferData[];
};

function MainScreen({rentOfferCount, offers}: MainScreenProps): ReactElement {
  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentOfferCount} places to stay in Amsterdam</b>
              <SortSelector selectedItemName={'Popular'} />
              <div className="cities__places-list places__list tabs__content">
                {
                  offers.map((offer: OfferData) => (
                    <OfferCard
                      id = {offer.id}
                      key={offer.id}
                      title={offer.title}
                      type={offer.type}
                      price={offer.price}
                      previewImage={offer.previewImage}
                      isFavorite={offer.isFavorite}
                      isPremium={offer.isPremium}
                      rating={offer.rating}
                    />
                  ))
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
