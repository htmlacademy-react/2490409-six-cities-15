import { OfferData } from '../types';
import { useAppSelector } from '../store/helpers.ts';
import { offersSelectors } from '../store/slices/offers';

function useFavoriteOffers(): OfferData[] {
  return useAppSelector(offersSelectors.offers).filter((offer) => offer.isFavorite);
}

export {
  useFavoriteOffers,
};
