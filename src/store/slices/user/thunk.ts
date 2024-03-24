import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthenticatedUserType, AuthenticationForm } from '../../../types';
import { AsyncActionsArgsType } from '../../helpers.ts';
import { API, dropToken, saveToken, Token } from '../../../services';
import { API_ROUTE } from '../../../constants';

const fetchUserByTokenAction = createAsyncThunk<AuthenticatedUserType, Token, AsyncActionsArgsType>(
  'fetch/user',
  async (token) => {
    const response = await API.get<AuthenticatedUserType>(API_ROUTE.Get.AuthDataByToken, { data: token });

    saveToken(token);

    return response.data;
  },
);

const loginAction = createAsyncThunk<AuthenticatedUserType, AuthenticationForm, AsyncActionsArgsType>(
  'auth/login',
  async ({login, password}) => {
    const response = await API.post<AuthenticatedUserType>(
      API_ROUTE.Post.Login,
      {
        data: {
          email: login,
          password,
        },
      });

    return response.data;
  },
);

const logoutAction = createAsyncThunk<void, Token, AsyncActionsArgsType>(
  'auth/logout',
  async (token) => {
    await API.delete(API_ROUTE.Delete.Logout, { data: token });
    dropToken();
  },
);

export {
  fetchUserByTokenAction,
  loginAction,
  logoutAction,
};

