import { DetailOfferStateType } from './index.ts';

const detailOfferSelectors = {
  detailOffer: (state: DetailOfferStateType) => state.detailOffer,
  detailOfferReviews: (state: DetailOfferStateType) => state.detailOfferReviews,
  nearbyOffers: (state: DetailOfferStateType) => state.nearbyOffers,
  getRequestStatus: (state: DetailOfferStateType) => state.requestStatus,
};

export {
  detailOfferSelectors,
};
