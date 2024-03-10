import { OfferData } from '../mocks';
import { SORT_TYPES, TSortTypes } from '../constants';

export function useOffersSort(sortType: TSortTypes, offers: OfferData[]) {
  switch (sortType) {
    case SORT_TYPES.Popular:
      return offers;
    case SORT_TYPES.PriceASC:
      return offers.sort((a, b) => a.price - b.price);
    case SORT_TYPES.PriceDESC:
      return offers.sort((a, b) => b.price - a.price);
    case SORT_TYPES.Rating:
      return offers.sort((a, b) => b.rating - a.rating);
  }
}
