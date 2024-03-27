import { CITIES } from '../constants';
import { CitiesType } from '../types';

const isCity = (value: string): value is CitiesType => (
  Object.values<string>(CITIES).includes(value)
);

export { isCity };
