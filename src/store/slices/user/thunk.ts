import { AuthenticatedUserType, AuthenticationForm } from '../../../types';
import { createAppAsyncThunk } from '../../helpers.ts';
import { dropToken, saveToken, Token } from '../../../services';
import { API_ROUTE } from '../../../constants';

const fetchUserByTokenAction = createAppAsyncThunk<AuthenticatedUserType, Token>(
  'fetch/user',
  async (token, { extra: api}) => {
    const response = await api.get<AuthenticatedUserType>(API_ROUTE.Get.AuthDataByToken, { data: token });

    saveToken(token);

    return response.data;
  },
);

const loginAction = createAppAsyncThunk<AuthenticatedUserType, AuthenticationForm>(
  'auth/login',
  async ({login, password}, { extra: api}) => {
    const response = await api.post<AuthenticatedUserType>(
      API_ROUTE.Post.Login,
      {email: login, password},
    );

    saveToken(response.data.token);

    return response.data;
  },
);

const logoutAction = createAppAsyncThunk<void, Token>(
  'auth/logout',
  async (token, { extra: api}) => {
    await api.delete(API_ROUTE.Delete.Logout, { data: token });
    dropToken();
  },
);

export {
  fetchUserByTokenAction,
  loginAction,
  logoutAction,
};

