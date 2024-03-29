import { OffersStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { REQUEST_STATUS } from '../../../constants';

const setOffersFulfilled = (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
  state.offers = action.payload;
  state.requestStatus = REQUEST_STATUS.Success;
};

const setOffersRejected = (state: OffersStateType) => {
  state.offers = [];
  state.requestStatus = REQUEST_STATUS.Error;
};

const setOffersLoading = (state: OffersStateType) => {
  state.requestStatus = REQUEST_STATUS.Loading;
};

export {
  setOffersFulfilled,
  setOffersRejected,
  setOffersLoading,
};
