import {
  makeFakeOffer,
  makeFakeOfferId,
  makeFakeOffersState,
  makeFakeReview,
  makeOfferAdditionalData
} from '../../../utils/tests';
import { offersActions, offersSlice } from './index.ts';
import { REQUEST_STATUS } from '../../../constants';
import {
  addCommentAction,
  changeFavoriteStatusAction, fetchCommentsAction,
  fetchDetailOfferAction,
  fetchFavoritesOffersAction, fetchNearbyOffersAction,
  fetchOffersAction
} from './thunk.ts';

describe('OffersReducer', () => {
  const createOffersState = () => makeFakeOffersState({
    offersLen: 10,
    additionalDataIndex: 1,
    detailOfferReviewsLen: 10,
    nearbyIndexes: [2, 3, 4],
  });

  it('should return initial state with empty action', () => {
    const state = createOffersState();
    const emptyAction = { type: '' };

    const result = offersSlice.reducer(state, emptyAction);

    expect(result).toEqual(state);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const initialState = {
      offers: [],
      additionalOfferData: null,
      detailOfferReviews: null,
      nearbyOffersIds: [],
      offersRequestStatus: REQUEST_STATUS.Idle,
      reviewRequestStatus: REQUEST_STATUS.Idle,
      activeOfferId: null,
    };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should set active offer id with "setActiveOfferId" action', () => {
    const state = createOffersState();
    const payload = state.offers[3].id;

    const result = offersSlice.reducer(state, offersActions.setActiveOfferId(payload));

    expect(result.activeOfferId).toEqual(payload);
  });

  it('should remove all favorite marks id with "removeAllFavoriteMarks" action', () => {
    const state = createOffersState();
    for (let i = 0; i < state.offers.length; i++) {
      state.offers[i].isFavorite = Boolean(i % 2);
    }

    const result = offersSlice.reducer(state, offersActions.removeAllFavoriteMarks());

    result.offers.forEach(({isFavorite}) => {
      expect(isFavorite).toBeFalsy();
    });
  });

  it('should set offersRequestStatus to REQUEST_STATUS.Loading and make array of offers empty with "fetchOffersAction.pending" action',
    () => {
      const { offers, offersRequestStatus } = offersSlice.reducer(
        undefined,
        fetchOffersAction.pending('', undefined, []),
      );

      expect(offers).toEqual([]);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Loading);
    },
  );

  it('should set offersRequestStatus to REQUEST_STATUS.Success and offer from payload to offers with "fetchOffersAction.fulfilled" action',
    () => {
      const offer = makeFakeOffer(makeFakeOfferId());
      const { offers, offersRequestStatus } = offersSlice.reducer(
        undefined,
        fetchOffersAction.fulfilled([offer], '', undefined),
      );

      expect(offers).toEqual([offer]);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Success);
    },
  );

  it('should set offersRequestStatus to REQUEST_STATUS.Error and make array of offers empty with "fetchOffersAction.rejected" action',
    () => {
      const { offers, offersRequestStatus } = offersSlice.reducer(
        undefined,
        fetchOffersAction.rejected(new Error(), '', undefined),
      );

      expect(offers).toEqual([]);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Error);
    },
  );

  it('should toggle offer\'s favorite status with "fetchOffersAction.pending" action',
    () => {
      const state = createOffersState();

      for (let i = 0; i < state.offers.length; i++) {
        state.offers[i].isFavorite = false;
      }

      const offerIdAndFavoriteStatus = {id: state.offers[3].id, status: true};
      const { offers, offersRequestStatus } = offersSlice.reducer(
        state,
        changeFavoriteStatusAction.pending('', offerIdAndFavoriteStatus, undefined),
      );

      offers.forEach(({isFavorite}, i) => {
        if (i === 3) {
          expect(isFavorite).toBeTruthy();
        } else {
          expect(isFavorite).toBeFalsy();
        }
      });


      expect(offersRequestStatus).toBe(REQUEST_STATUS.Idle);
    },
  );

  it('should toggle offer\'s favorite status with "fetchOffersAction.rejected" action',
    () => {
      const state = createOffersState();

      for (let i = 0; i < state.offers.length; i++) {
        state.offers[i].isFavorite = false;
      }

      const offerIdAndFavoriteStatus = {id: state.offers[3].id, status: true};
      const { offers, offersRequestStatus } = offersSlice.reducer(
        state,
        changeFavoriteStatusAction.rejected(new Error(), '', offerIdAndFavoriteStatus),
      );

      offers.forEach(({isFavorite}, i) => {
        if (i === 3) {
          expect(isFavorite).toBeTruthy();
        } else {
          expect(isFavorite).toBeFalsy();
        }
      });

      expect(offersRequestStatus).toBe(REQUEST_STATUS.Idle);
    },
  );

  it('should update offers favorite status with "fetchFavoritesOffersAction.fulfilled" action',
    () => {
      const state = createOffersState();

      for (let i = 0; i < state.offers.length; i++) {
        state.offers[i].isFavorite = false;
      }

      state.offers[3].isFavorite = true;

      const newFavoriteOffers = [{...state.offers[5], isFavorite: true}];

      const { offers, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchFavoritesOffersAction.fulfilled(newFavoriteOffers, '', undefined, undefined),
      );

      offers.forEach(({isFavorite}, i) => {
        if (i === 5) {
          expect(isFavorite).toBeTruthy();
        } else {
          expect(isFavorite).toBeFalsy();
        }
      });

      expect(offersRequestStatus).toBe(REQUEST_STATUS.Idle);
    },
  );

  it('should set REQUEST_STATUS.Loading for offersRequestStatus with "fetchDetailOfferAction.pending" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
      });

      const { additionalOfferData, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchDetailOfferAction.pending('', '', ''),
      );

      expect(additionalOfferData).toEqual(null);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Loading);
    },
  );

  it('should set additional data with "fetchDetailOfferAction.fulfilled" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
      });

      const expectedAdditionalOfferData = makeOfferAdditionalData(state.offers[0].id);
      const detailOffer = {...expectedAdditionalOfferData, ...state.offers[0]};

      const { additionalOfferData, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchDetailOfferAction.fulfilled(detailOffer, '', '', undefined),
      );

      expect(additionalOfferData).toEqual(expectedAdditionalOfferData);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Success);
    },
  );

  it('should clear additional dat with "fetchDetailOfferAction.rejected" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
        additionalDataIndex: 0,
      });

      const { additionalOfferData, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchDetailOfferAction.rejected(new Error(), '', '', undefined),
      );

      expect(additionalOfferData).toEqual(null);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Error);
    },
  );

  it('should set REQUEST_STATUS.Loading for offersRequestStatus with "fetchNearbyOffersAction.pending" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 5,
        nearbyIndexes: [1, 2, 3],
      });

      const expectedNearbyOffersIds = [];
      for (let i = 1; i < 4; i++) {
        expectedNearbyOffersIds.push(state.offers[i].id);
      }

      const { nearbyOffersIds, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchNearbyOffersAction.pending('', '', ''),
      );

      expect(nearbyOffersIds).toEqual(expectedNearbyOffersIds);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Loading);
    },
  );

  it('should set nearby offers ids and append offers to "offers" if they are not in offers with "fetchNearbyOffersAction.fulfilled" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
      });

      const nearbyId = makeFakeOfferId();
      const nearby = [makeFakeOffer(nearbyId)];

      const { offers, nearbyOffersIds, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchNearbyOffersAction.fulfilled(nearby, '', '', undefined),
      );

      expect(offers).toContain(nearby[0]);
      expect(nearbyOffersIds).toEqual([nearbyId]);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Success);
    },
  );

  it('should clear nearby offers with "fetchNearbyOffersAction.rejected" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 5,
        nearbyIndexes: [1, 2, 3],
      });

      const { nearbyOffersIds, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchNearbyOffersAction.rejected(new Error(), '', '', undefined),
      );

      expect(nearbyOffersIds).toEqual([]);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Error);
    },
  );

  it('should set offers\' reviews to detailOfferReviews with "fetchCommentsAction.fulfilled" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
      });

      const comments = [makeFakeReview(state.offers[0].id)];

      const { detailOfferReviews, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchCommentsAction.fulfilled(comments, '', '', undefined),
      );

      expect(detailOfferReviews).toEqual(comments);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Success);
    },
  );

  it('should clear offers\' reviews with "fetchCommentsAction.rejected" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 1,
        detailOfferReviewsLen: 3,
      });

      const { detailOfferReviews, offersRequestStatus } = offersSlice.reducer(
        state,
        fetchCommentsAction.rejected(new Error(), '', '', undefined),
      );

      expect(detailOfferReviews).toEqual(null);
      expect(offersRequestStatus).toBe(REQUEST_STATUS.Error);
    },
  );

  it('should set REQUEST_STATUS.Loading for reviewRequestStatus with "addCommentAction.pending" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 5,
      });

      const newComment = makeFakeReview(state.offers[0].id);

      const { detailOfferReviews, reviewRequestStatus } = offersSlice.reducer(
        state,
        addCommentAction.pending('', newComment, ''),
      );

      expect(detailOfferReviews).toEqual(null);
      expect(reviewRequestStatus).toBe(REQUEST_STATUS.Loading);
    },
  );

  it('should add user new user\'s comment to detailOfferReviews with "addCommentAction.fulfilled" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 5,
        detailOfferReviewsLen: 1,
      });

      const newComment = makeFakeReview(state.offers[0].id);

      const { detailOfferReviews, reviewRequestStatus } = offersSlice.reducer(
        state,
        addCommentAction.fulfilled(newComment, '', newComment),
      );

      expect(detailOfferReviews).toContain(newComment);
      expect(reviewRequestStatus).toBe(REQUEST_STATUS.Success);
    },
  );

  it('detailOfferReviews should not change with "addCommentAction.rejected" action',
    () => {
      const state = makeFakeOffersState({
        offersLen: 5,
        additionalDataIndex: 0,
        detailOfferReviewsLen: 1,
      });

      const newComment = makeFakeReview(state.offers[0].id);

      const { detailOfferReviews, reviewRequestStatus } = offersSlice.reducer(
        state,
        addCommentAction.rejected(new Error(), '', newComment),
      );

      expect(detailOfferReviews).not.toContain(newComment);
      expect(reviewRequestStatus).toBe(REQUEST_STATUS.Error);
    },
  );
});
