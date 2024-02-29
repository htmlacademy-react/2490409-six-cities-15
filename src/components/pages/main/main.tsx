import { ReactElement, useState } from 'react';
import { Header, OffersListWithMap } from '../../organisms';
import { CityTabs, MainEmptyState } from '../../molecules';
import { OfferData } from '../../../mocks';
import { CITIES, CitiesType } from '../../../constants';
import { useSearchParams } from 'react-router-dom';
import { isCity } from '../../../types';

type MainScreenProps = {
  offers: OfferData[];
};

function MainScreen({ offers }: MainScreenProps): ReactElement {
  const isEmpty = offers.length === 0;
  const mainClassName = `page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`;
  const divClassname = `cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`;
  // todo: isCity is case sensitive, must be insensitive check
  const filterCityName = (city: string) => isCity(city) ? city : null;

  const [ searchParams ] = useSearchParams();
  const currentTabFromSearch = filterCityName(searchParams.get('city') || '') || CITIES.Paris;
  const [ currCity, setCurrCity ] = useState(currentTabFromSearch);

  const handleCityChange = (city: CitiesType) => {
    setCurrCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={handleCityChange} currTab={currCity}/>
        <div className="cities">
          <div className={divClassname}>
            { isEmpty ? <MainEmptyState city={currCity}/> : <OffersListWithMap offers={offers} currCity={currCity} /> }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
