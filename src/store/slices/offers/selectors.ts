import { OffersStateType } from './index.ts';

const offersSelectors = {
  offers: (state: OffersStateType) => state.offers,
  offersRequestStatus: (state: OffersStateType) => state.offersRequestStatus,
  reviewRequestStatus: (state: OffersStateType) => state.reviewRequestStatus,
  activeOfferId: (state: OffersStateType) => state.activeOfferId,
  detailOffer: (state: OffersStateType) => state.currentDetailOffer,
  detailOfferReviews: (state: OffersStateType) => state.currentDetailOfferReviews,
  nearbyOffers: (state: OffersStateType) => state.currentDetailOfferNearbyOffers,
};

export {
  offersSelectors,
};
