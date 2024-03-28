import { ReactElement } from 'react';
import { Header, OffersListWithMap } from '../../organisms';
import { CityTabs, MainEmptyState } from '../../molecules';
import {APP_ROUTE, CITIES, REQUEST_STATUS} from '../../../constants';
import { CitiesType } from '../../../types';
import {redirect, useNavigate, useParams} from 'react-router-dom';
import { createMainRouteWithCity, isCity } from '../../../utils';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/helpers.ts';
import { capitalize } from '../../../utils';
import { offersSelectors } from '../../../store/slices/offers';
import { LoaderContainer } from '../../molecules';

function MainPage(): ReactElement | null {
  const filterCityName = (city: string) => isCity(city) ? city : null;
  const navigate = useNavigate();

  const { city: cityFromPath = CITIES.Paris } = useParams();

  const currentCity = filterCityName(capitalize(cityFromPath.toLowerCase()));
  const offersFromCurrentCity = useAppSelector(offersSelectors.offers)
    .filter((item) => item.city.name === currentCity);
  const requestStatus = useAppSelector(offersSelectors.getRequestStatus);

  if (!currentCity) {
    navigate(APP_ROUTE.NotFound);

    return null;
  }

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

  return (
    <div className="page page--gray page--main">
      <Header isLogoActive/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs onCityChanged={handleCitySelect} currTab={currentCity}/>
        {
          requestStatus === REQUEST_STATUS.Loading
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
