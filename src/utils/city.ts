import { Cities } from '../constants';
import { CitiesType } from '../types';

const isCity = (value: string): value is CitiesType => (
  Object.values<string>(Cities).includes(value)
);

export { isCity };
