import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { fetchOffers } from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import { clearOffers, setOffersLoading } from './extra-reducers.ts';

type OffersStateType = {
  offers: OfferData[];
  isLoading: boolean;
  activeOfferId: string | null;
  // error: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  isLoading: true,
  activeOfferId: null,
  // error: null,
};

const offersSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: offersReducer,
  selectors: {
    offers: (state) => state.offers,
    isLoading: (state) => state.isLoading,
    activeOfferId: (state) => state.activeOfferId,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, setOffersLoading)
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
