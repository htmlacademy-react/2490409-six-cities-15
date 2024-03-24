import { createSlice } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData } from '../../../types';
import {
  addCommentAction,
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
} from './thunk.ts';
import { sliceName } from './meta.ts';
import {
  addReview,
  clearDetailOffer,
  clearNearbyOffers,
  clearReviews,
  setOffersLoading,
  setDetailOffer,
  setNearbyOffers,
  setReviews,
} from './extra-reducers.ts';
import { detailOfferSelectors as selectors } from './selector.ts';

type DetailOfferStateType = {
  detailOffer: OfferDetailData | null;
  detailOfferReviews: CommentData[] | null;
  nearbyOffers: OfferData[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: DetailOfferStateType = {
  detailOffer: null,
  detailOfferReviews: null,
  nearbyOffers: null,
  isLoading: true,
  error: null,
};

const detailOfferSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {},
  selectors: selectors,
  extraReducers: (builder) => {
    builder
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

const { actions: detailOfferActions } = detailOfferSlice;
const { selectors: detailOfferSelectors } = detailOfferSlice;

export {
  detailOfferSlice,
  detailOfferActions,
  detailOfferSelectors,
};

export type {
  DetailOfferStateType,
};
