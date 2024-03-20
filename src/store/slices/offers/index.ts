import { createSlice } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import {fetchCommentsAction, fetchDetailOfferAction, fetchNearbyOffersAction, fetchOffersAction} from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import {
  clearDetailOffer,
  clearNearbyOffers,
  clearOffers,
  clearReviews,
  setOffersLoading,
} from './extra-reducers.ts';

type OffersStateType = {
  offers: OfferData[];
  detailOffer: OfferDetailData | null;
  detailOfferReviews: CommentData[] | null;
  nearbyOffers: OfferData[] | null;
  isLoading: boolean;
  activeOfferId: string | null;
  error: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  detailOffer: null,
  detailOfferReviews: null,
  nearbyOffers: null,
  isLoading: true,
  activeOfferId: null,
  error: null,
};

const offersSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: offersReducer,
  selectors: {
    offers: (state) => state.offers,
    detailOffer: (state) => state.detailOffer,
    detailOfferReviews: (state) => state.detailOfferReviews,
    nearbyOffers: (state) => state.nearbyOffers,
    isLoading: (state) => state.isLoading,
    activeOfferId: (state) => state.activeOfferId,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, setOffersLoading)
      .addCase(fetchOffersAction.fulfilled, offersReducer.setOffers)
      .addCase(fetchOffersAction.rejected, clearOffers)
      .addCase(fetchDetailOfferAction.pending, setOffersLoading)
      .addCase(fetchDetailOfferAction.fulfilled, offersReducer.setDetailOffer)
      .addCase(fetchDetailOfferAction.rejected, clearDetailOffer)
      .addCase(fetchNearbyOffersAction.pending, setOffersLoading)
      .addCase(fetchNearbyOffersAction.fulfilled, offersReducer.setNearbyOffers)
      .addCase(fetchNearbyOffersAction.rejected, clearNearbyOffers)
      .addCase(fetchCommentsAction.fulfilled, offersReducer.setReviews)
      .addCase(fetchCommentsAction.rejected, clearReviews);
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
