import { createSlice } from '@reduxjs/toolkit';
import { AuthenticatedUserType, AuthStatusType } from '../../../types';
import { Nullable } from 'vitest';
import { AUTH_STATUS } from '../../../constants';
import { loginAction, fetchUserByTokenAction, logoutAction } from './thunk.ts';
import { userReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import { clearUser, setUser } from './extra-reducers.ts';

type UserStateType = {
  user: Nullable<AuthenticatedUserType>;
  authStatus: AuthStatusType;
  error: string | null;
};

const initialState: UserStateType = {
  user: null,
  authStatus: AUTH_STATUS.Unknown,
  error: null,
};

const userSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: userReducer,
  selectors: {
    user: (state) => state.user,
    authStatus: (state) => state.authStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByTokenAction.fulfilled, setUser)
      .addCase(fetchUserByTokenAction.rejected, clearUser)
      .addCase(loginAction.fulfilled, setUser)
      .addCase(loginAction.rejected, clearUser)
      .addCase(logoutAction.fulfilled, clearUser);
  },
});

const { actions: userActions } = userSlice;
const { selectors: userSelectors } = userSlice;

export {
  userSlice,
  userActions,
  userSelectors,
};

export type {
  UserStateType,
};

