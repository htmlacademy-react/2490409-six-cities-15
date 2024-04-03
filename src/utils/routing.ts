import { APP_ROUTE } from '../constants';
import { CitiesType } from '../types';

const createMainRouteWithCity = (city: CitiesType) => APP_ROUTE.MainWithCity.replace(':city', city.toLowerCase());

export {
  createMainRouteWithCity,
};
