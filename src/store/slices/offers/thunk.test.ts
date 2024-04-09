import { createAPI } from '../../../services';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppThunkDispatch, setFavoriteStatusInRoute, setOfferIdInRoute, StoreStateType } from '../../helpers.ts';
import { Action } from '@reduxjs/toolkit';
import { offersInitialState } from './index.ts';
import { sliceName } from './meta.ts';
import {
  addCommentAction,
  changeFavoriteStatusAction, fetchCommentsAction,
  fetchDetailOfferAction,
  fetchFavoritesOffersAction, fetchNearbyOffersAction,
  fetchOffersAction
} from './thunk.ts';
import { ApiRoute } from '../../../constants';
import {
  extractActionsTypes,
  makeFakeOffer,
  makeFakeOfferAdditionalData,
  makeFakeOfferId,
  makeFakeOffersState, makeFakeReview
} from '../../../utils/tests';
import { StatusCodes } from 'http-status-codes';
import { OfferData } from '../../../types';

describe('offers\' thunk actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  const middlewares = [thunk.withExtraArgument(axios)];
  const mockStoreCreator =
    configureMockStore<Pick<StoreStateType, typeof sliceName>, Action<string>, AppThunkDispatch>(middlewares);
  let store: ReturnType<typeof mockStoreCreator>;

  const getFirstOffer = (testStore: ReturnType<typeof mockStoreCreator>) => testStore.getState().OFFERS?.offers?.[0];
  const getFirstOfferId = (testStore: ReturnType<typeof mockStoreCreator>) => getFirstOffer(testStore)?.id as OfferData['id'];

  describe('fetchOffersAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({ [sliceName]: offersInitialState });
    });

    it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.fulfilled" with thunk fetchOffersAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Get.OffersList).reply(StatusCodes.OK);
      await store.dispatch(fetchOffersAction());

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);
    });

    it('should set offers after "fetchOffersAction.fulfilled" with thunk fetchOffersAction', async () => {
      const offers = [makeFakeOffer(makeFakeOfferId())];
      mockAxiosAdapter.onGet(ApiRoute.Get.OffersList).reply(
        StatusCodes.OK,
        offers,
      );
      await store.dispatch(fetchOffersAction());

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(offers);
    });

    it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.rejected" with thunk fetchOffersAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Get.OffersList).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchOffersAction());

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('changeFavoriteStatusAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({
        [sliceName]: makeFakeOffersState({
          offersLen: 1,
          offersFavoriteStatus: false,
        }),
      });
    });

    const createStatus = (isFavorite: boolean, testStore: ReturnType<typeof mockStoreCreator>) => ({id: getFirstOfferId(testStore), status: isFavorite});

    const getRoute = (isFavorite: boolean, testStore: ReturnType<typeof mockStoreCreator>) => (
      setFavoriteStatusInRoute(
        setOfferIdInRoute(ApiRoute.Post.SetFavorite, getFirstOfferId(testStore)),
        isFavorite,
      )
    );

    it('should dispatch "changeFavoriteStatusAction.pending" and "changeFavoriteStatusAction.fulfilled" with thunk changeFavoriteStatusAction', async () => {
      const newIsFavorite = true;
      const newStatus = createStatus(newIsFavorite, store);

      mockAxiosAdapter.onPost(getRoute(newIsFavorite, store)).reply(StatusCodes.OK);
      await store.dispatch(changeFavoriteStatusAction(newStatus));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.fulfilled.type,
      ]);
    });

    it('offer status should be changed after "changeFavoriteStatusAction.pending" and "changeFavoriteStatusAction.fulfilled" with thunk changeFavoriteStatusAction', async () => {
      const newIsFavorite = true;
      const offerWithNewStatus = {...getFirstOffer(store), isFavorite: newIsFavorite};

      mockAxiosAdapter.onPost(getRoute(newIsFavorite, store)).reply(StatusCodes.OK, offerWithNewStatus);
      await store.dispatch(changeFavoriteStatusAction(createStatus(true, store)));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof changeFavoriteStatusAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(offerWithNewStatus);
    });

    it('should dispatch "changeFavoriteStatusAction.pending" and "changeFavoriteStatusAction.rejected" with thunk changeFavoriteStatusAction', async () => {
      const newIsFavorite = false;
      mockAxiosAdapter.onPost(getRoute(newIsFavorite, store)).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(changeFavoriteStatusAction(createStatus(newIsFavorite, store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoritesOffersAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({ [sliceName]: offersInitialState });
    });

    it('should dispatch "fetchFavoritesOffersAction.pending" and "fetchFavoritesOffersAction.fulfilled" with thunk fetchFavoritesOffersAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Get.Favorites).reply(StatusCodes.OK);
      await store.dispatch(fetchFavoritesOffersAction());

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesOffersAction.pending.type,
        fetchFavoritesOffersAction.fulfilled.type,
      ]);
    });

    it('should set offers after "fetchFavoritesOffersAction.fulfilled" with thunk fetchFavoritesOffersAction', async () => {
      const offers = [makeFakeOffer(makeFakeOfferId(), true)];

      mockAxiosAdapter.onGet(ApiRoute.Get.Favorites).reply(StatusCodes.OK, offers);
      await store.dispatch(fetchFavoritesOffersAction());

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchFavoritesOffersAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(offers);
    });

    it('should dispatch "fetchFavoritesOffersAction.pending" and "fetchFavoritesOffersAction.rejected" with thunk fetchFavoritesOffersAction', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Get.Favorites).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchFavoritesOffersAction());

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesOffersAction.pending.type,
        fetchFavoritesOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchDetailOfferAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({
        [sliceName]: makeFakeOffersState({
          offersLen: 1,
        }),
      });
    });

    const getRoute = (testStore: ReturnType<typeof mockStoreCreator>) => setOfferIdInRoute(ApiRoute.Get.DetailOffer, getFirstOfferId(testStore));

    it('should dispatch "fetchDetailOfferAction.pending" and "fetchDetailOfferAction.fulfilled" with thunk fetchDetailOfferAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK);
      await store.dispatch(fetchDetailOfferAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchDetailOfferAction.pending.type,
        fetchDetailOfferAction.fulfilled.type,
      ]);
    });

    it('should set additional data after "fetchDetailOfferAction.fulfilled" with thunk fetchDetailOfferAction', async () => {
      const additionalData = makeFakeOfferAdditionalData(getFirstOfferId(store));
      const detailOffer = {...getFirstOffer(store), ...additionalData};

      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK, detailOffer);
      await store.dispatch(fetchDetailOfferAction(getFirstOfferId(store)));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchDetailOfferAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(detailOffer);
    });

    it('should dispatch "fetchDetailOfferAction.pending" and "fetchDetailOfferAction.rejected" with thunk fetchDetailOfferAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchDetailOfferAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchDetailOfferAction.pending.type,
        fetchDetailOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchNearbyOffersAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({
        [sliceName]: makeFakeOffersState({
          offersLen: 1,
          additionalDataIndex: 0,
        }),
      });
    });

    const getRoute = (testStore: ReturnType<typeof mockStoreCreator>) => setOfferIdInRoute(ApiRoute.Get.NearBy, getFirstOfferId(testStore));

    it('should dispatch "fetchNearbyOffersAction.pending" and "fetchNearbyOffersAction.fulfilled" with thunk fetchNearbyOffersAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK);
      await store.dispatch(fetchNearbyOffersAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.fulfilled.type,
      ]);
    });

    it('should set nearby offers after "fetchNearbyOffersAction.fulfilled" with thunk fetchNearbyOffersAction', async () => {
      const offers = [makeFakeOffer(makeFakeOfferId())];
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK, offers);
      await store.dispatch(fetchNearbyOffersAction(getFirstOfferId(store)));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchNearbyOffersAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(offers);
    });

    it('should dispatch "fetchNearbyOffersAction.pending" and "fetchNearbyOffersAction.rejected" with thunk fetchNearbyOffersAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchNearbyOffersAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearbyOffersAction.pending.type,
        fetchNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({
        [sliceName]: makeFakeOffersState({
          offersLen: 1,
          additionalDataIndex: 0,
        }),
      });
    });

    const getRoute = (testStore: ReturnType<typeof mockStoreCreator>) => setOfferIdInRoute(ApiRoute.Get.Comments, getFirstOfferId(testStore));

    it('should dispatch "fetchCommentsAction.pending" and "fetchCommentsAction.fulfilled" with thunk fetchCommentsAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK);
      await store.dispatch(fetchCommentsAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);
    });

    it('should set comments after "fetchCommentsAction.fulfilled" with thunk fetchCommentsAction', async () => {
      const comments = [makeFakeReview(getFirstOfferId(store))];

      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.OK, comments);
      await store.dispatch(fetchCommentsAction(getFirstOfferId(store)));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(comments);
    });

    it('should dispatch "fetchCommentsAction.pending" and "fetchCommentsAction.rejected" with thunk fetchCommentsAction', async () => {
      mockAxiosAdapter.onGet(getRoute(store)).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchCommentsAction(getFirstOfferId(store)));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('addCommentAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({
        [sliceName]: makeFakeOffersState({
          offersLen: 1,
          additionalDataIndex: 0,
          detailOfferReviewsLen: 3,
        }),
      });
    });

    const getRoute = (testStore: ReturnType<typeof mockStoreCreator>) => setOfferIdInRoute(ApiRoute.Post.AddComment, getFirstOfferId(testStore));

    it('should dispatch "addCommentAction.pending" and "addCommentActionn.fulfilled" with thunk addCommentAction', async () => {
      const newComment = makeFakeReview(getFirstOfferId(store));

      mockAxiosAdapter.onPost(getRoute(store)).reply(StatusCodes.OK);
      await store.dispatch(addCommentAction(newComment));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addCommentAction.pending.type,
        addCommentAction.fulfilled.type,
      ]);
    });

    it('should set offers after "addCommentAction.fulfilled" with thunk addCommentAction', async () => {
      const newComment = makeFakeReview(getFirstOfferId(store));

      mockAxiosAdapter.onPost(getRoute(store)).reply(StatusCodes.OK, newComment);
      await store.dispatch(addCommentAction(newComment));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof addCommentAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(newComment);
    });

    it('should dispatch "addCommentAction.pending" and "addCommentAction.rejected" with thunk addCommentAction', async () => {
      const newComment = makeFakeReview(getFirstOfferId(store));
      mockAxiosAdapter.onPost(getRoute(store)).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(addCommentAction(newComment));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        addCommentAction.pending.type,
        addCommentAction.rejected.type,
      ]);
    });
  });
});

