import { OffersStateType } from './index.ts';

const offersSelectors = {
  offers: (state: OffersStateType) => state.offers,
  favoriteOffers: (state: OffersStateType) => state.offers.filter((offer) => offer.isFavorite),
  isLoading: (state: OffersStateType) => state.isLoading,
  activeOfferId: (state: OffersStateType) => state.activeOfferId,
};

export {
  offersSelectors,
};
