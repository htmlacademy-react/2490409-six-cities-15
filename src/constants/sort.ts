type SortTypesType = typeof SORT_TYPES[keyof typeof SORT_TYPES];

const SORT_TYPES = {
  Popular: 'Popular',
  PriceASC: 'Price: low to high',
  PriceDESC: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

export default SORT_TYPES;
export type {
  SortTypesType,
};
