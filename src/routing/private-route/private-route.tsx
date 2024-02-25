import { Navigate } from 'react-router-dom';
import { AppRoute, AUTH_STATUS } from '../../constants';
import {PropsWithChildren} from 'react';

type PrivateRouteProps = PropsWithChildren<{
  authStatus: typeof AUTH_STATUS[keyof typeof AUTH_STATUS];
}>;

function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return authStatus === AUTH_STATUS.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
