import {ReactElement, useState} from 'react';
import { Header } from '../../organisms';
import { CityTabs, VerticalOfferCardsList } from '../../molecules';
import { OfferData } from '../../../mocks';
import { CITIES, CitiesType } from '../../../constants';
import { useSearchParams } from 'react-router-dom';

type MainScreenProps = {
  offers: OfferData[];
};

function MainScreen({ offers }: MainScreenProps): ReactElement {
  const filterCityName = (city: string) => city in Object.values(CITIES) ? city : null;
  const getOffersByCity = (city: CitiesType) => offers.filter((offer) => offer.city.name === city);

  const [ searchParams ] = useSearchParams();
  let currentTabFromSearch = filterCityName(searchParams.get('city') || '') || CITIES.Paris;
  const [ currCity, setCurrCity ] = useState(currentTabFromSearch as CitiesType);

  const handleCityChange = (city: CitiesType) => {
    setCurrCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={handleCityChange} currTab={currCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <VerticalOfferCardsList city={currCity} offers={getOffersByCity(currCity)} />
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
