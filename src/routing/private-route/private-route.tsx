import { Navigate } from 'react-router-dom';
import { AppRoute, AUTH_STATUS } from '../../constants';
import {PropsWithChildren} from 'react';
import {getAuthStatus} from '../auth-status/auth-status.ts';

type PrivateRouteProps = PropsWithChildren<{
  isReverse?: boolean;
}>;

function PrivateRoute({children, isReverse = false}: PrivateRouteProps) {
  return getAuthStatus() === (isReverse ? AUTH_STATUS.NoAuth : AUTH_STATUS.Auth)
    ? children
    : <Navigate to={isReverse ? AppRoute.Main : AppRoute.Login} />;
}

export default PrivateRoute;
