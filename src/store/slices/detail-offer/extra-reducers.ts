import { DetailOfferStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';

const setOffersLoading = (state: DetailOfferStateType) => {
  state.isLoading = true;
};

const setDetailOffer = (state: DetailOfferStateType, action: PayloadAction<OfferDetailData>) => {
  state.detailOffer = action.payload;
  state.isLoading = false;
};

const clearDetailOffer = (state: DetailOfferStateType) => {
  state.detailOffer = null;
  state.isLoading = false;
};

const setNearbyOffers = (state: DetailOfferStateType, action: PayloadAction<OfferData[]>) => {
  state.nearbyOffers = action.payload;
  state.isLoading = false;
};

const clearNearbyOffers = (state: DetailOfferStateType) => {
  state.nearbyOffers = null;
  state.isLoading = false;
};

const clearReviews = (state: DetailOfferStateType) => {
  state.detailOfferReviews = null;
  state.isLoading = false;
};

const addReview = (state: DetailOfferStateType, action: PayloadAction<CommentData>) => {
  state.detailOfferReviews = [...state.detailOfferReviews ?? [], action.payload];
};

const setReviews = (state: DetailOfferStateType, action: PayloadAction<CommentData[]>) => {
  state.detailOfferReviews = action.payload;
  state.isLoading = false;
};

export {
  setOffersLoading,
  setDetailOffer,
  clearDetailOffer,
  setNearbyOffers,
  clearNearbyOffers,
  setReviews,
  clearReviews,
  addReview,
};
