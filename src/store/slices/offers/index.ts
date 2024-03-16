import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { offers } from '../../../mocks';
import { Nullable } from 'vitest';

type OffersStateType = {
  offers: OfferData[];
  activeOfferId?: Nullable<string>;
};

const initialState: OffersStateType = {
  offers: offers,
};

const offersSlice = createSlice({
  initialState,
  name: 'general/offers',
  reducers: {
    setOffers: (state, action: PayloadAction<OfferData[]>) => {
      state.offers = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<Nullable<OfferData['id']>>) => {
      state.activeOfferId = action.payload;
    }
  },
  selectors: {
    offers: (state) => state.offers,
    activeOfferId: (state) => state.activeOfferId,
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase();
  // },
});

const { actions: offersActions } = offersSlice;
const { selectors: offerSelectors } = offersSlice;

export {
  offersSlice,
  offersActions,
  offerSelectors,
};
