import { OffersStateType } from './index.ts';

const offersSelectors = {
  offers: (state: OffersStateType) => state.offers,
  favoriteOffers: (state: OffersStateType) => state.offers.filter((offer) => offer.isFavorite),
  detailOffer: (state: OffersStateType) => state.detailOffer,
  detailOfferReviews: (state: OffersStateType) => state.detailOfferReviews,
  nearbyOffers: (state: OffersStateType) => state.nearbyOffers,
  isLoading: (state: OffersStateType) => state.isLoading,
  activeOfferId: (state: OffersStateType) => state.activeOfferId,
};

export {
  offersSelectors,
};
