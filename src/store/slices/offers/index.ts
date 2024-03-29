import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../../types';
import { fetchOffersAction } from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import {
  clearOffers,
  setOffersLoading,
  setOffers,
} from './extra-reducers.ts';
import { offersSelectors as selectors } from './selector.ts';

type OffersStateType = {
  offers: OfferData[];
  isLoading: boolean;
  activeOfferId: string | null;
  error: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  isLoading: true,
  activeOfferId: null,
  error: null,
};

const offersSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: offersReducer,
  selectors: selectors,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, setOffersLoading)
      .addCase(fetchOffersAction.fulfilled, setOffers)
      .addCase(fetchOffersAction.rejected, clearOffers);
  },
});

const { actions: offersActions } = offersSlice;
const { selectors: offersSelectors } = offersSlice;

export {
  offersSlice,
  offersActions,
  offersSelectors,
};

export type {
  OffersStateType,
};
