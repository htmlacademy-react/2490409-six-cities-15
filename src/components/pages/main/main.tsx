import { ReactElement } from 'react';
import { Header, OffersListWithMap } from '../../organisms';
import { CityTabs, MainEmptyState } from '../../molecules';
import { CITIES, CitiesType } from '../../../constants';
import { useSearchParams } from 'react-router-dom';
import { isCity } from '../../../types';
import classNames from 'classnames';
import { store } from '../../../store';
import { changeCityAction } from '../../../store/action.ts';
import { useAppDispatch } from '../../../store/helpers.ts';
import { capitalize } from '../../../utils';

function MainScreen(): ReactElement {
  const globalState = store.getState();
  const isEmpty = globalState.offers.length === 0;
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
  const dispatch = useAppDispatch();

  const handleCityChange = (city: CitiesType) => {
    dispatch(changeCityAction(city));
  };

  handleCityChange(currentTabFromSearch);

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={handleCityChange} currTab={globalState.currentCity}/>
        <div className="cities">
          <div className={divClassname}>
            {
              isEmpty
                ? <MainEmptyState city={globalState.currentCity}/>
                : <OffersListWithMap offers={globalState.offers} currCity={globalState.currentCity} />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
