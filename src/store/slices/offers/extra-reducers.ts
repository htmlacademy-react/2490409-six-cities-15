import { OffersStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { OfferData, OfferDetailData } from '../../../types';

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

export {
  clearOffers,
  setOffersLoading,
  setDetailOffer,
  clearDetailOffer,
  setNearbyOffers,
  clearNearbyOffers,
  clearReviews,
};
