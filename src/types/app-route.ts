import { APP_ROUTE } from '../constants';

type AppRouteType = typeof APP_ROUTE[keyof typeof APP_ROUTE];

export type {
  AppRouteType,
};
