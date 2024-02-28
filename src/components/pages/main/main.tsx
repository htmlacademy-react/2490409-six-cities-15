import { ReactElement } from 'react';
import { Header } from '../../organisms';
import { CityTabs, VerticalOfferCardsList } from '../../molecules';
import { OfferData } from '../../../mocks';

type MainScreenProps = {
  offers: OfferData[];
};

function MainScreen({ offers }: MainScreenProps): ReactElement {
  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <VerticalOfferCardsList offers={offers} />
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
