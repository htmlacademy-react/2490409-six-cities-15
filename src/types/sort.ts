import { SortTypes } from '../constants';

type SortTypesType = typeof SortTypes[keyof typeof SortTypes];

export type {
  SortTypesType,
};
