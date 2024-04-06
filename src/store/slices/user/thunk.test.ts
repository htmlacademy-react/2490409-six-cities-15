import { createAPI } from '../../../services';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppThunkDispatch, StoreStateType } from '../../helpers.ts';
import { sliceName } from './meta.ts';
import { Action } from '@reduxjs/toolkit';
import { userInitialState } from './index.ts';
import { API_ROUTE } from '../../../constants';
import { StatusCodes } from 'http-status-codes';
import {
  extractActionsTypes,
  makeFakeAuthenticatedUser, makeFakeAuthenticationForm,
  makeFakeToken
} from '../../../utils/tests';
import {
  fetchUserByTokenAction,
  loginAction,
  logoutAction,
} from './thunk.ts';
import * as tokenStorage from '../../../services/token.ts';

describe('user\'s thunk actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  const middlewares = [thunk.withExtraArgument(axios)];
  const mockStoreCreator =
    configureMockStore<Pick<StoreStateType, typeof sliceName>, Action<string>, AppThunkDispatch>(middlewares);
  let store: ReturnType<typeof mockStoreCreator>;

  describe('fetchUserByTokenAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({ [sliceName]: userInitialState });
    });

    it('should dispatch "fetchUserByTokenAction.pending" and "fetchUserByTokenAction.fulfilled" with thunk fetchUserByTokenAction', async () => {
      const token = makeFakeToken();
      mockAxiosAdapter.onGet(API_ROUTE.Get.AuthDataByToken).reply(StatusCodes.OK);
      await store.dispatch(fetchUserByTokenAction(token));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchUserByTokenAction.pending.type,
        fetchUserByTokenAction.fulfilled.type,
      ]);
    });

    it('should set user after "fetchUserByTokenAction.fulfilled" with thunk fetchUserByTokenAction', async () => {
      const token = makeFakeToken();
      const authenticatedUser = makeFakeAuthenticatedUser(token);

      mockAxiosAdapter.onGet(API_ROUTE.Get.AuthDataByToken).reply(StatusCodes.OK, authenticatedUser);
      await store.dispatch(fetchUserByTokenAction(token));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof fetchUserByTokenAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(authenticatedUser);
    });

    it('should dispatch "fetchUserByTokenAction.pending" and "fetchUserByTokenAction.rejected" with thunk fetchUserByTokenAction', async () => {
      const token = makeFakeToken();
      mockAxiosAdapter.onGet(API_ROUTE.Get.AuthDataByToken).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchUserByTokenAction(token));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchUserByTokenAction.pending.type,
        fetchUserByTokenAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({ [sliceName]: userInitialState });
    });

    it('should dispatch "loginAction.pending" and "loginAction.fulfilled" with thunk loginAction', async () => {
      const userForm = makeFakeAuthenticationForm();
      const token = makeFakeToken();

      mockAxiosAdapter.onPost(API_ROUTE.Post.Login).reply(StatusCodes.OK, token);
      await store.dispatch(loginAction(userForm));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should set user after "loginAction.fulfilled" with thunk loginAction', async () => {
      const userForm = makeFakeAuthenticationForm();
      const authenticatedUser = makeFakeAuthenticatedUser();

      mockAxiosAdapter.onPost(API_ROUTE.Post.Login).reply(StatusCodes.OK, authenticatedUser);
      await store.dispatch(loginAction(userForm));

      const fulfilledAction = store.getActions().at(1) as ReturnType<typeof loginAction.fulfilled>;

      expect(fulfilledAction.payload).toEqual(authenticatedUser);
    });

    it('should call "saveToken" once with the received token', async () => {
      const userForm = makeFakeAuthenticationForm();
      const authenticatedUser = makeFakeAuthenticatedUser();

      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      mockAxiosAdapter.onPost(API_ROUTE.Post.Login).reply(StatusCodes.OK, authenticatedUser);
      await store.dispatch(loginAction(userForm));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(authenticatedUser.token);
    });

    it('should dispatch "loginAction.pending" and "loginAction.rejected" with thunk loginAction', async () => {
      const userForm = makeFakeAuthenticationForm();
      mockAxiosAdapter.onPost(API_ROUTE.Post.Login).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(loginAction(userForm));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        loginAction.rejected.type,
      ]);
    });
  });

  describe('logoutAction', () => {
    beforeEach(() => {
      store = mockStoreCreator({ [sliceName]: userInitialState });
    });

    it('should dispatch "logoutAction.pending" and "logoutAction.fulfilled" with thunk logoutAction', async () => {
      const token = makeFakeToken();
      mockAxiosAdapter.onDelete(API_ROUTE.Delete.Logout).reply(StatusCodes.NO_CONTENT);
      await store.dispatch(logoutAction(token));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should call "dropToken" once', async () => {
      const token = makeFakeToken();
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      mockAxiosAdapter.onDelete(API_ROUTE.Delete.Logout).reply(StatusCodes.NO_CONTENT);
      await store.dispatch(logoutAction(token));

      expect(mockDropToken).toBeCalledTimes(1);
    });

    it('should dispatch "logoutAction.pending" and "logoutAction.rejected" with thunk logoutAction', async () => {
      const token = makeFakeToken();
      mockAxiosAdapter.onDelete(API_ROUTE.Delete.Logout).reply(StatusCodes.BAD_REQUEST);

      await store.dispatch(fetchUserByTokenAction(token));

      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchUserByTokenAction.pending.type,
        fetchUserByTokenAction.rejected.type,
      ]);
    });
  });
});
