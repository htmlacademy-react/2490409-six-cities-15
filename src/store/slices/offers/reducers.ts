import { PayloadAction } from '@reduxjs/toolkit';
import {OfferData, OfferDetailData} from '../../../types';
import { OffersStateType } from './index.ts';

const offersReducer = {
  setOffers: (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
    state.offers = action.payload;
    state.isLoading = false;
  },
  setActiveOfferId: (state: OffersStateType, action: PayloadAction<OfferData['id'] | null>) => {
    state.activeOfferId = action.payload;
  },
  setDetailOffer: (state: OffersStateType, action: PayloadAction<OfferDetailData>) => {
    state.detailOffer = action.payload;
    state.isLoading = false;
  },
  setNearbyOffers: (state: OffersStateType, action: PayloadAction<OfferData[]>) => {
    state.nearbyOffers = action.payload;
    state.isLoading = false;
  },
  setIsOffersLoading: (state: OffersStateType, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  }
};

export {
  offersReducer,
};
