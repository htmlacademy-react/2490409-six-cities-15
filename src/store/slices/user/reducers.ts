import { PayloadAction } from '@reduxjs/toolkit';
import { AuthenticatedUserType } from '../../../types';
import { UserStateType } from '.';

const userReducer = {
  setUser: (state: UserStateType, action: PayloadAction<AuthenticatedUserType>) => {
    state.user = action.payload;
  },
};

export {
  userReducer,
};
