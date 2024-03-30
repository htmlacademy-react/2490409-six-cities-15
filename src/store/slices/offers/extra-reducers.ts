import { OffersStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import {CommentData, OfferData, OfferDetailData} from '../../../types';

const setOffers = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  state.offers = action.payload;
  state.isLoading = false;
};

const clearOffers = (state: OffersStateType) => {
  state.offers = [];
};

const setOffersLoading = (state: OffersStateType) => {
  state.isLoading = true;
};

const setDetailOffer = (state: OffersStateType, action: PayloadAction<OfferDetailData>) => {
  state.detailOffer = action.payload;
  state.isLoading = false;
};

const clearDetailOffer = (state: OffersStateType) => {
  state.detailOffer = null;
  state.isLoading = false;
};

const setNearbyOffers = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  state.nearbyOffers = action.payload;
  state.isLoading = false;
};

const clearNearbyOffers = (state: OffersStateType) => {
  state.nearbyOffers = null;
  state.isLoading = false;
};

const clearReviews = (state: OffersStateType) => {
  state.detailOfferReviews = null;
  state.isLoading = false;
};

const addReview = (state: OffersStateType, action: PayloadAction<CommentData>) => {
  state.detailOfferReviews = [...state.detailOfferReviews ?? [], action.payload];
};

const setReviews = (state: OffersStateType, action: PayloadAction<CommentData[]>) => {
  state.detailOfferReviews = action.payload;
  state.isLoading = false;
};

export {
  setOffers,
  clearOffers,
  setOffersLoading,
  setDetailOffer,
  clearDetailOffer,
  setNearbyOffers,
  clearNearbyOffers,
  setReviews,
  clearReviews,
  addReview,
};
