import { AuthStatusType } from '../types';
import { useAppSelector } from '../store/helpers.ts';
import { userSelectors } from '../store/slices/user';

const useAuthStatus = (): AuthStatusType => useAppSelector(userSelectors.authStatus);

export {
  useAuthStatus,
};
