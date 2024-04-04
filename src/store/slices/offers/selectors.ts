import { OffersStateType } from './index.ts';

const offersSelectors = {
  offers: (state: OffersStateType) => state.offers,
  offersRequestStatus: (state: OffersStateType) => state.offersRequestStatus,
  reviewRequestStatus: (state: OffersStateType) => state.reviewRequestStatus,
  activeOfferId: (state: OffersStateType) => state.activeOfferId,
  additionalOfferData: (state: OffersStateType) => state.additionalOfferData,
  detailOfferReviews: (state: OffersStateType) => state.detailOfferReviews,
  nearbyOffersIds: (state: OffersStateType) => state.nearbyOffersIds,
};

export {
  offersSelectors,
};
