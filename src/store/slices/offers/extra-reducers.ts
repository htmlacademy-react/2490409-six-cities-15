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

const toggleFavoriteStatus = (
  state: OffersStateType, action: PayloadAction<unknown, string, { arg: { id: OfferData['id'] } }>
) => {
  const i = state.offers.findIndex((offer) => offer.id === action.meta.arg.id);

  if (i > -1) {
    state.offers[i] = { ...state.offers[i], isFavorite: !state.offers[i].isFavorite };
  }
};

export {
  setOffersFulfilled,
  setOffersRejected,
  setOffersLoading,
  toggleFavoriteStatus,
};
