import { OfferData } from '../types';
import { SortTypes } from '../constants';
import { SortTypesType } from '../types';

export function sortOffers(sortType: SortTypesType, offers: OfferData[]) {
  switch (sortType) {
    case SortTypes.Popular:
      return offers;
    case SortTypes.PriceASC:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortTypes.PriceDESC:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortTypes.Rating:
      return offers.toSorted((a, b) => b.rating - a.rating);
  }
}
