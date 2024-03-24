import { DetailOfferStateType } from './index.ts';

const detailOfferSelectors = {
  detailOffer: (state: DetailOfferStateType) => state.detailOffer,
  detailOfferReviews: (state: DetailOfferStateType) => state.detailOfferReviews,
  nearbyOffers: (state: DetailOfferStateType) => state.nearbyOffers,
  isLoading: (state: DetailOfferStateType) => state.isLoading,
};

export {
  detailOfferSelectors,
};
