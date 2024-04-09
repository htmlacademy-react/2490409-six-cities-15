import { AppRoute } from '../constants';
import { CitiesType } from '../types';

const createMainRouteWithCity = (city: CitiesType) => AppRoute.MainWithCity.replace(':city', city.toLowerCase());

export {
  createMainRouteWithCity,
};
