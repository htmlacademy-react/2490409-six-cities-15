import { CITIES } from '../constants';

type CitiesType = typeof CITIES[keyof typeof CITIES];

export type {
  CitiesType,
};
