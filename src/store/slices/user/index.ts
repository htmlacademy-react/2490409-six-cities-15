import { createSlice } from '@reduxjs/toolkit';
import { AuthenticatedUserType, AuthStatusType } from '../../../types';
import { Nullable } from 'vitest';
import { AUTH_STATUS } from '../../../constants';
import { loginAction, fetchUserByTokenAction, logoutAction } from './thunk.ts';
import { userReducer } from './reducers.ts';
import { sliceName } from './meta.ts';
import { clearUser, setUser } from './extra-reducers.ts';
import { userSelectors as selectors } from './selectors.ts';

type UserStateType = {
  user: Nullable<AuthenticatedUserType>;
  authorizationStatus: AuthStatusType;
  error: string | null;
};

const initialState: UserStateType = {
  user: null,
  authorizationStatus: AUTH_STATUS.Unknown,
  error: null,
};

const userSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: userReducer,
  selectors: selectors,
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

