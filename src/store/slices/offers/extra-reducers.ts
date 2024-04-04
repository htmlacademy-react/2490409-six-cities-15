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
  const i = state.offers.findIndex(({ id }) => id === action.meta.arg.id);

  if (i > -1) {
    state.offers[i] = { ...state.offers[i], isFavorite: !state.offers[i].isFavorite};
  }
};

const updateFavorites = (
  state: OffersStateType, action: PayloadAction<OfferData[]>
) => {
  const favoriteOffersIds = action.payload.map(({id}) => id);

  for (const [i, offer] of state.offers.entries()) {
    state.offers[i].isFavorite = favoriteOffersIds.includes(offer.id);
  }
};

const setDataLoading = (state: OffersStateType) => {
  state.offersRequestStatus = REQUEST_STATUS.Loading;
};

const setDetailOfferFulfilled = (state: OffersStateType, action: PayloadAction<OfferDetailData>) => {
  const { payload } = action;

  if (state.offers.findIndex(({id}) => id === payload.id) === -1) {
    state.offers.push({
      id: payload.id,
      title: payload.title,
      type: payload.type,
      price: payload.price,
      previewImage: payload.previewImage,
      city: payload.city,
      location: payload.location,
      isFavorite: payload.isFavorite,
      isPremium: payload.isPremium,
      rating: payload.rating,
    });
  }

  state.additionalOfferData = {
    id: payload.id,
    description: payload.description,
    images: payload.images,
    goods: payload.goods,
    host: payload.host,
    bedrooms: payload.bedrooms,
    maxAdults: payload.maxAdults,
  };

  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setDetailOfferRejected = (state: OffersStateType) => {
  state.additionalOfferData = null;
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const setNearbyOffersFulfilled = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  const nearby = action.payload.slice(0, 3);
  const nearbyIds: Array<OfferData['id']> = [];

  nearby.forEach((offer) => {
    if (state.offers.findIndex(({ id }) => offer.id === id) === -1) {
      state.offers.push(offer);
    }

    nearbyIds.push(offer.id);
  });

  state.nearbyOffersIds = nearbyIds;
};

const setNearbyOffersRejected = (state: OffersStateType) => {
  state.nearbyOffersIds = [];
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const setReviewsFulfilled = (state: OffersStateType, action: PayloadAction<CommentData[]>) => {
  state.detailOfferReviews = action.payload;
  state.offersRequestStatus = REQUEST_STATUS.Success;
};

const setReviewsRejected = (state: OffersStateType) => {
  state.detailOfferReviews = null;
  state.offersRequestStatus = REQUEST_STATUS.Error;
};

const addReviewPending = (state: OffersStateType) => {
  state.reviewRequestStatus = REQUEST_STATUS.Loading;
};

const addReviewFulfilled = (state: OffersStateType, action: PayloadAction<CommentData>) => {
  state.detailOfferReviews = [...state.detailOfferReviews ?? [], action.payload];
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
