import { PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { OffersStateType } from './index.ts';

const offersReducer = {
  setActiveOfferId: (state: OffersStateType, action: PayloadAction<OfferData['id']|null>) => {
    state.activeOfferId = action.payload;
  },
};

export {
  offersReducer,
};
