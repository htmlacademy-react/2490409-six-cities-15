import { AUTH_STATUS } from '../../../constants';
import { UserStateType } from './index.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthenticatedUserType } from '../../../types';

const setUser = (state: UserStateType, action: PayloadAction<AuthenticatedUserType>) => {
  state.user = action.payload;
  state.authorizationStatus = AUTH_STATUS.Auth;
};

const clearUser = (state: UserStateType) => {
  state.user = null;
  state.authorizationStatus = AUTH_STATUS.NoAuth;
};

export {
  setUser,
  clearUser,
};

