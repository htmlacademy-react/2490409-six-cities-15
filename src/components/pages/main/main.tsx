import LogoIcon from '../../atoms/logo-icon/logo-icon.tsx';
import { offers } from '../../../examples/1.ts';
import OfferCard from '../../molecules/offer-card/offer-card.tsx';
import CityTabs from '../../molecules/city-tabs/city-tabs.tsx';
import SortSelector from '../../molecules/sort-selector/sort-selector.tsx';

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

function MainScreen({rentOfferCount}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoIcon />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
