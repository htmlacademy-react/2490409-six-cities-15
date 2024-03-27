import { createSlice } from '@reduxjs/toolkit';
import { OfferData, RequestStatusType } from '../../../types';
import {
  changeFavoriteStatusAction,
  fetchFavoritesOffersAction,
  fetchOffersAction,
} from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import {
  setOffersRejected,
  setOffersLoading,
  setOffersFulfilled,
  toggleFavoriteStatus,
  updateFavorites,
} from './extra-reducers.ts';
import { offersSelectors as selectors } from './selector.ts';
import { REQUEST_STATUS } from '../../../constants';

type OffersStateType = {
  offers: OfferData[];
  requestStatus: RequestStatusType;
  activeOfferId: string | null;
  error: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  requestStatus: REQUEST_STATUS.Idle,
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
      .addCase(fetchOffersAction.fulfilled, setOffersFulfilled)
      .addCase(fetchOffersAction.rejected, setOffersRejected)
      .addCase(changeFavoriteStatusAction.pending, toggleFavoriteStatus)
      .addCase(changeFavoriteStatusAction.rejected, toggleFavoriteStatus)
      .addCase(fetchFavoritesOffersAction.fulfilled, updateFavorites);
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
