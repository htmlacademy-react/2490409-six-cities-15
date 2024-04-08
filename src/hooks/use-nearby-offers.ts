import { useAppSelector } from '../store/helpers.ts';
import { offersSelectors } from '../store/slices/offers';

function useNearbyOffers() {
  const offers = useAppSelector(offersSelectors.offers);
  const nearby = useAppSelector(offersSelectors.nearbyOffersIds);

  return offers.filter(({id}) => nearby.includes(id));
}

export {
  useNearbyOffers,
};
