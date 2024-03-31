import { OfferData } from '../types';
import { useAppSelector } from '../store/helpers.ts';
import { offersSelectors } from '../store/slices/offers';
import { useMemo } from 'react';

function useFavoriteOffers(): OfferData[] {
  const offers = useAppSelector(offersSelectors.offers);
  return useMemo(() => offers.filter((offer) => offer.isFavorite), [offers]);
}

export {
  useFavoriteOffers,
};
