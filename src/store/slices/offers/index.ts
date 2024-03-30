import { createSlice } from '@reduxjs/toolkit';
import { CommentData, OfferData, OfferDetailData, RequestStatusType } from '../../../types';
import {
  changeFavoriteStatusAction,
  fetchFavoritesOffersAction,
  fetchOffersAction,
  addCommentAction,
  fetchCommentsAction,
  fetchDetailOfferAction,
  fetchNearbyOffersAction,
} from './thunk.ts';
import { offersReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import {
  setOffersRejected,
  setOffersLoading,
  setOffersFulfilled,
  toggleFavoriteStatus,
  updateFavorites,
  addReview,
  setDataLoading,
  setDetailOfferFulfilled,
  setDetailOfferRejected,
  setNearbyOffersFulfilled,
  setNearbyOffersRejected,
  setReviewsFulfilled,
  setReviewsRejected,
} from './extra-reducers.ts';
import { offersSelectors as selectors } from './selectors.ts';
import { REQUEST_STATUS } from '../../../constants';

type OffersStateType = {
  offers: OfferData[];
  currentDetailOffer: OfferDetailData | null;
  currentDetailOfferReviews: CommentData[] | null;
  currentDetailOfferNearbyOffers: OfferData[] | null;
  requestStatus: RequestStatusType;
  activeOfferId: string | null;
};

const initialState: OffersStateType = {
  offers: [],
  currentDetailOffer: null,
  currentDetailOfferReviews: null,
  currentDetailOfferNearbyOffers: null,
  requestStatus: REQUEST_STATUS.Idle,
  activeOfferId: null,
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
      .addCase(fetchFavoritesOffersAction.fulfilled, updateFavorites)
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
