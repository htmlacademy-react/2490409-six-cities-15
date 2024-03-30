import { createSlice } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import {
  addCommentAction,
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
  fetchOffersAction
} from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import {
  addReview,
  clearDetailOffer,
  clearNearbyOffers,
  clearOffers,
  clearReviews,
  setOffersLoading,
  setDetailOffer, setNearbyOffers, setReviews, setOffers,
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
      .addCase(fetchOffersAction.fulfilled, setOffers)
      .addCase(fetchOffersAction.rejected, clearOffers)
      .addCase(fetchDetailOfferAction.pending, setOffersLoading)
      .addCase(fetchDetailOfferAction.fulfilled, setDetailOffer)
      .addCase(fetchDetailOfferAction.rejected, clearDetailOffer)
      .addCase(fetchNearbyOffersAction.pending, setOffersLoading)
      .addCase(fetchNearbyOffersAction.fulfilled, setNearbyOffers)
      .addCase(fetchNearbyOffersAction.rejected, clearNearbyOffers)
      .addCase(fetchCommentsAction.fulfilled, setReviews)
      .addCase(fetchCommentsAction.rejected, clearReviews)
      .addCase(addCommentAction.fulfilled, addReview);
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
