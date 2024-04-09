import { Cities } from '../constants';

type CitiesType = typeof Cities[keyof typeof Cities];

export type {
  CitiesType,
};
