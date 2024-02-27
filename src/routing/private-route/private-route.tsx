import { Navigate } from 'react-router-dom';
import { APP_ROUTE, AUTH_STATUS } from '../../constants';
import {PropsWithChildren} from 'react';
import {getAuthStatus} from '../auth-status/auth-status.ts';

type PrivateRouteProps = PropsWithChildren<{
  isReverse?: boolean;
}>;

function PrivateRoute({children, isReverse = false}: PrivateRouteProps) {
  return getAuthStatus() === (isReverse ? AUTH_STATUS.NoAuth : AUTH_STATUS.Auth)
    ? children
    : <Navigate to={isReverse ? APP_ROUTE.Main : APP_ROUTE.Login} />;
}

export default PrivateRoute;
