import { AuthStatus } from '../../../constants';
import { UserStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthenticatedUserType } from '../../../types';

const setUser = (state: UserStateType, action: PayloadAction<AuthenticatedUserType>) => {
  state.user = action.payload;
  state.authorizationStatus = AuthStatus.Auth;
};

const clearUser = (state: UserStateType) => {
  state.user = null;
  state.authorizationStatus = AuthStatus.NoAuth;
};

export {
  setUser,
  clearUser,
};

