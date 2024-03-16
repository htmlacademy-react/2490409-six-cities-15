import CITIES from './cities.ts';
import APP_ROUTE from './routes.ts';
import SORT_TYPES from './sort.ts';
import AUTH_STATUS from './auth-status.ts';
import { URL_MARKER_CURRENT } from './map-icons.ts';
import { URL_MARKER_DEFAULT } from './map-icons.ts';
import { CitiesType } from './cities.ts';
import { SortTypesType } from './sort.ts';
import { BASE_URL } from './api.ts';

export {
  CITIES,
  APP_ROUTE,
  SORT_TYPES,
  AUTH_STATUS,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  BASE_URL,
};

export type {
  CitiesType,
  SortTypesType,
};
