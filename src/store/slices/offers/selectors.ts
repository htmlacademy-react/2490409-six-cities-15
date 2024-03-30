import { OffersStateType } from './index.ts';

const offersSelectors = {
  offers: (state: OffersStateType) => state.offers,
  favoriteOffers: (state: OffersStateType) => state.offers.filter((offer) => offer.isFavorite),
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
