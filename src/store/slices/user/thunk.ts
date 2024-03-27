import { AuthenticatedUserType, AuthenticationForm } from '../../../types';
import { createAppAsyncThunk } from '../../helpers.ts';
import { API, dropToken, saveToken, Token } from '../../../services';
import { API_ROUTE } from '../../../constants';

const fetchUserByTokenAction = createAppAsyncThunk<AuthenticatedUserType, Token>(
  'fetch/user',
  async (token) => {
    const response = await API.get<AuthenticatedUserType>(API_ROUTE.Get.AuthDataByToken, { data: token });

    saveToken(token);

    return response.data;
  },
);

const loginAction = createAppAsyncThunk<AuthenticatedUserType, AuthenticationForm>(
  'auth/login',
  async ({login, password}) => {
    const response = await API.post<AuthenticatedUserType>(
      API_ROUTE.Post.Login,
      {email: login, password},
    );

    saveToken(response.data.token);

    return response.data;
  },
);

const logoutAction = createAppAsyncThunk<void, Token>(
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

