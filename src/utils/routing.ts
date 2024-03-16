import {APP_ROUTE, CitiesType} from '../constants';

const createMainRouteWithCity = (city: CitiesType) => APP_ROUTE.MainWithCity.replace(':city', city.toLowerCase());

export {
  createMainRouteWithCity,
};
