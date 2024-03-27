import { DetailOfferStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import { REQUEST_STATUS } from '../../../constants';

const setDataLoading = (state: DetailOfferStateType) => {
  state.requestStatus = REQUEST_STATUS.Loading;
};

const setDetailOfferFulfilled = (state: DetailOfferStateType, action: PayloadAction<OfferDetailData>) => {
  state.detailOffer = action.payload;
  state.requestStatus = REQUEST_STATUS.Success;
};

const setDetailOfferRejected = (state: DetailOfferStateType) => {
  state.detailOffer = null;
  state.requestStatus = REQUEST_STATUS.Error;
};

const setNearbyOffersFulfilled = (state: DetailOfferStateType, action: PayloadAction<OfferData[]>) => {
  state.nearbyOffers = action.payload;
  state.requestStatus = REQUEST_STATUS.Success;
};

const setNearbyOffersRejected = (state: DetailOfferStateType) => {
  state.nearbyOffers = null;
  state.requestStatus = REQUEST_STATUS.Error;
};

const setReviewsFulfilled = (state: DetailOfferStateType, action: PayloadAction<CommentData[]>) => {
  state.detailOfferReviews = action.payload;
  state.requestStatus = REQUEST_STATUS.Success;
};

const setReviewsRejected = (state: DetailOfferStateType) => {
  state.detailOfferReviews = null;
  state.requestStatus = REQUEST_STATUS.Error;
};

const addReview = (state: DetailOfferStateType, action: PayloadAction<CommentData>) => {
  state.detailOfferReviews = [...state.detailOfferReviews ?? [], action.payload];
};

export {
  setDataLoading,
  setDetailOfferFulfilled,
  setDetailOfferRejected,
  setNearbyOffersFulfilled,
  setNearbyOffersRejected,
  setReviewsFulfilled,
  setReviewsRejected,
  addReview,
};
