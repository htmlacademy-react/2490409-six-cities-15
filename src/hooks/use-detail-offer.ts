import { useAppSelector } from '../store/helpers.ts';
import { offersSelectors } from '../store/slices/offers';
import { OfferDetailData } from '../types';

function useDetailOffer(): OfferDetailData | null {
  const additionalData = useAppSelector(offersSelectors.additionalOfferData);
  const offers = useAppSelector(offersSelectors.offers);
  if (additionalData === null) {
    return null;
  }

  const index = offers.findIndex(({id}) => id === additionalData.id);
  if (index === -1) {
    return null;
  }

  return {...offers[index], ...additionalData};
}

export {
  useDetailOffer,
};
