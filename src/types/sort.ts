import { SORT_TYPES } from '../constants';

type SortTypesType = typeof SORT_TYPES[keyof typeof SORT_TYPES];

export type {
  SortTypesType,
};
