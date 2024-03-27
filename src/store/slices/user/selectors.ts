import { UserStateType } from './index.ts';

const userSelectors = {
  user: (state: UserStateType) => state.user,
  authStatus: (state: UserStateType) => state.authorizationStatus,
};

export {
  userSelectors,
};
