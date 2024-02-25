import { ReactElement } from 'react';
import { Header } from '../../organisms';
import { OfferCard, CityTabs, SortSelector } from '../../molecules';
import { offers } from '../../../examples/1.ts';

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type MainScreenProps = {
  rentOfferCount: number;
};

function MainScreen({rentOfferCount}: MainScreenProps): ReactElement {
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
                  offers.map((offer: Offer) => (
                    <OfferCard
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