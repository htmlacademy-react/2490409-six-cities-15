import { createSlice } from '@reduxjs/toolkit';
import {CommentData, OfferData, OfferDetailData, RequestStatusType} from '../../../types';
import {
  addCommentAction,
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
} from './thunk.ts';
import { sliceName } from './meta.ts';
import {
  addReview,
  setDetailOfferRejected,
  setNearbyOffersRejected,
  setReviewsRejected,
  setDataLoading,
  setDetailOfferFulfilled,
  setNearbyOffersFulfilled,
  setReviewsFulfilled,
} from './extra-reducers.ts';
import { detailOfferSelectors as selectors } from './selector.ts';
import { REQUEST_STATUS } from '../../../constants';

type DetailOfferStateType = {
  detailOffer: OfferDetailData | null;
  detailOfferReviews: CommentData[] | null;
  nearbyOffers: OfferData[] | null;
  requestStatus: RequestStatusType;
  error: string | null;
};

const initialState: DetailOfferStateType = {
  detailOffer: null,
  detailOfferReviews: null,
  nearbyOffers: null,
  requestStatus: REQUEST_STATUS.Idle,
  error: null,
};

const detailOfferSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {},
  selectors: selectors,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailOfferAction.pending, setDataLoading)
      .addCase(fetchDetailOfferAction.fulfilled, setDetailOfferFulfilled)
      .addCase(fetchDetailOfferAction.rejected, setDetailOfferRejected)
      .addCase(fetchNearbyOffersAction.pending, setDataLoading)
      .addCase(fetchNearbyOffersAction.fulfilled, setNearbyOffersFulfilled)
      .addCase(fetchNearbyOffersAction.rejected, setNearbyOffersRejected)
      .addCase(fetchCommentsAction.fulfilled, setReviewsFulfilled)
      .addCase(fetchCommentsAction.rejected, setReviewsRejected)
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
