import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { fetchOffers } from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import { clearOffers } from './extra-reducers.ts';

type OffersStateType = {
  offers: OfferData[];
  activeOfferId: string | null;
  error: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  activeOfferId: null,
  error: null,
};

const offersSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: offersReducer,
  selectors: {
    offers: (state) => state.offers,
    activeOfferId: (state) => state.activeOfferId,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, offersReducer.setOffers)
      .addCase(fetchOffers.rejected, clearOffers);
  },
});

const { actions: offersActions } = offersSlice;
const { selectors: offerSelectors } = offersSlice;

export {
  offersSlice,
  offersActions,
  offerSelectors,
};

export type {
  OffersStateType,
};
