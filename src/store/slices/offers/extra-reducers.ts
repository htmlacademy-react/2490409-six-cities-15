import { OffersStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import { REQUEST_STATUS } from '../../../constants';

const setOffersFulfilled = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  state.offers = action.payload;
  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setOffersRejected = (state: OffersStateType) => {
  state.offers = [];
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const setOffersLoading = (state: OffersStateType) => {
  state.offersRequestStatus = REQUEST_STATUS.Loading;
};

const toggleFavoriteStatus = (
  state: OffersStateType, action: PayloadAction<unknown, string, { arg: { id: OfferData['id'] } }>
) => {
  const i = state.offers.findIndex((offer) => offer.id === action.meta.arg.id);
  const newFavoriteStatus = !state.offers[i].isFavorite;

  if (i > -1) {
    state.offers[i] = { ...state.offers[i], isFavorite: newFavoriteStatus};
  }

  if (state.currentDetailOfferNearbyOffers) {
    const j = state.currentDetailOfferNearbyOffers.findIndex((offer) => offer.id === action.meta.arg.id);
    if (j > -1) {
      state.currentDetailOfferNearbyOffers[j] = { ...state.currentDetailOfferNearbyOffers[j], isFavorite: newFavoriteStatus};
    }
  }

  if (state.currentDetailOffer?.id === action.meta.arg.id) {
    state.currentDetailOffer.isFavorite = newFavoriteStatus;
  }
};

const updateFavorites = (
  state: OffersStateType, action: PayloadAction<OfferData[]>
) => {
  const favoriteOffersIds = action.payload.map((offer) => offer.id);

  for (const [i, offer] of state.offers.entries()) {
    state.offers[i].isFavorite = favoriteOffersIds.includes(offer.id);
  }
};

const setDataLoading = (state: OffersStateType) => {
  state.offersRequestStatus = REQUEST_STATUS.Loading;
};

const setDetailOfferFulfilled = (state: OffersStateType, action: PayloadAction<OfferDetailData>) => {
  state.currentDetailOffer = action.payload;
  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setDetailOfferRejected = (state: OffersStateType) => {
  state.currentDetailOffer = null;
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const setNearbyOffersFulfilled = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  state.currentDetailOfferNearbyOffers = action.payload.slice(0, 3);
  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setNearbyOffersRejected = (state: OffersStateType) => {
  state.currentDetailOfferNearbyOffers = null;
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const setReviewsFulfilled = (state: OffersStateType, action: PayloadAction<CommentData[]>) => {
  state.currentDetailOfferReviews = action.payload;
  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setReviewsRejected = (state: OffersStateType) => {
  state.currentDetailOfferReviews = null;
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const addReviewPending = (state: OffersStateType) => {
  state.reviewRequestStatus = REQUEST_STATUS.Loading;
};

const addReviewFulfilled = (state: OffersStateType, action: PayloadAction<CommentData>) => {
  state.currentDetailOfferReviews = [...state.currentDetailOfferReviews ?? [], action.payload];
  state.reviewRequestStatus = REQUEST_STATUS.Success;
};

const addReviewRejected = (state: OffersStateType) => {
  state.reviewRequestStatus = REQUEST_STATUS.Error;
};


export {
  setOffersFulfilled,
  setOffersRejected,
  setOffersLoading,
  toggleFavoriteStatus,
  updateFavorites,
  setDataLoading,
  setDetailOfferFulfilled,
  setDetailOfferRejected,
  setNearbyOffersFulfilled,
  setNearbyOffersRejected,
  setReviewsFulfilled,
  setReviewsRejected,
  addReviewPending,
  addReviewFulfilled,
  addReviewRejected,
};
