import { AuthenticatedUserType, AuthenticationForm } from '../../../types';
import {AsyncActionsArgsType, createAppAsyncThunk} from '../../helpers.ts';
import { dropToken, saveToken, Token } from '../../../services';
import { ApiRoute } from '../../../constants';

const fetchUserByTokenAction = createAppAsyncThunk<AuthenticatedUserType, Token, AsyncActionsArgsType>(
  'fetch/user',
  async (token, { extra: api}) => {
    const response = await api.get<AuthenticatedUserType>(ApiRoute.Get.AuthDataByToken, { data: token });

    saveToken(token);

    return response.data;
  },
);

const loginAction = createAppAsyncThunk<AuthenticatedUserType, AuthenticationForm, AsyncActionsArgsType>(
  'auth/login',
  async ({login, password}, { extra: api}) => {
    const response = await api.post<AuthenticatedUserType>(
      ApiRoute.Post.Login,
      {email: login, password},
    );

    saveToken(response.data.token);

    return response.data;
  },
);

const logoutAction = createAppAsyncThunk<void, Token, AsyncActionsArgsType>(
  'auth/logout',
  async (token, { extra: api}) => {
    await api.delete(ApiRoute.Delete.Logout, { data: token });
    dropToken();
  },
);

export {
  fetchUserByTokenAction,
  loginAction,
  logoutAction,
};

