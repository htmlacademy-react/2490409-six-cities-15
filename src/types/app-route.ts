import { AppRoute } from '../constants';

type AppRouteType = typeof AppRoute[keyof typeof AppRoute];

export type {
  AppRouteType,
};
