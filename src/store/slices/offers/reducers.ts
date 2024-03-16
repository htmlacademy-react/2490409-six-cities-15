import { PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { OffersStateType } from './index.ts';

const offersReducer = {
  setOffers: (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
    state.offers = action.payload;
  },
  setActiveOfferId: (state: OffersStateType, action: PayloadAction<OfferData['id'] | null>) => {
    state.activeOfferId = action.payload;
  },
};

export {
  offersReducer,
};
