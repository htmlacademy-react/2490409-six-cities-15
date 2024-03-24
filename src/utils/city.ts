import { CITIES, CitiesType } from '../constants';

const isCity = (value: string): value is CitiesType => (
  Object.values<string>(CITIES).includes(value)
);

export { isCity };
