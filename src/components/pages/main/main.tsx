import { ReactElement } from 'react';
import { Header, OffersListWithMap } from '../../organisms';
import { CityTabs, MainEmptyState } from '../../molecules';
import { CITIES, CitiesType } from '../../../constants';
import { redirect, useParams } from 'react-router-dom';
import { createMainRouteWithCity, isCity } from '../../../utils';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/helpers.ts';
import { capitalize } from '../../../utils';
import { offerSelectors } from '../../../store/slices/offers';
import { LoaderContainer } from '../../molecules';

function MainPage(): ReactElement {
  const filterCityName = (city: string) => isCity(city) ? city : null;

  const { city: cityFromPath = CITIES.Paris } = useParams();
  const currentCity = filterCityName(capitalize(cityFromPath.toLowerCase())) ?? CITIES.Paris;

  const offersFromCurrentCity = useAppSelector(offerSelectors.offers)
    .filter((item) => item.city.name === currentCity);

  const isEmpty = offersFromCurrentCity.length === 0;
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

  const handleCitySelect = (cityName: CitiesType) => {
    redirect(createMainRouteWithCity(cityName));
  };

  const isLoading = useAppSelector(offerSelectors.isLoading);

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={handleCitySelect} currTab={currentCity}/>
        {
          isLoading
            ? <LoaderContainer/>
            : (
              <div className="cities">
                <div className={divClassname}>
                  {
                    isEmpty
                      ? <MainEmptyState city={currentCity}/>
                      : <OffersListWithMap offersFromCurrentCity={offersFromCurrentCity} currentCity={currentCity} />
                  }
                </div>
              </div>
            )
        }
      </main>
    </div>
  );
}

export default MainPage;
