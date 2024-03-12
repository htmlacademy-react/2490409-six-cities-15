import { ReactElement } from 'react';
import { Header, OffersListWithMap } from '../../organisms';
import { CityTabs, MainEmptyState } from '../../molecules';
import { CITIES } from '../../../constants';
import { useSearchParams } from 'react-router-dom';
import { isCity } from '../../../utils';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/helpers.ts';
import { capitalize } from '../../../utils';
import {useCitySelect} from '../../../hooks';

function MainPage(): ReactElement {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  const isEmpty = offers.length === 0;
  const mainClassName = classNames(
    'page__main',
    'page__main--index',
    {'page__main--index-empty': isEmpty },
  );
  const divClassname = classNames(
    'container',
    'cities__places-container',
    {'cities__places-container--empty': isEmpty},
  );

  const filterCityName = (city: string) => isCity(city) ? city : null;

  const [ searchParams ] = useSearchParams();
  const cityFromSearchParams = searchParams.get('city') || '';
  const currentTabFromSearch = filterCityName(capitalize(cityFromSearchParams.toLowerCase())) || CITIES.Paris;

  useCitySelect(currentTabFromSearch);

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={useCitySelect} currTab={currentCity}/>
        <div className="cities">
          <div className={divClassname}>
            {
              isEmpty
                ? <MainEmptyState city={currentCity}/>
                : <OffersListWithMap offers={offers} currCity={currentCity} />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
