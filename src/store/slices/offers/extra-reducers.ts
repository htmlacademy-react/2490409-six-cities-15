import { OffersStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';

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

export {
  setOffers,
  clearOffers,
  setOffersLoading,
};
