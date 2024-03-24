import { Navigate } from 'react-router-dom';
import { APP_ROUTE, AUTH_STATUS } from '../../constants';
import { PropsWithChildren } from 'react';
import { useAuthStatus } from '../../hooks';

type PrivateRouteProps = PropsWithChildren<{
  isReverse?: boolean;
}>;

function PrivateRoute({children, isReverse = false}: PrivateRouteProps) {
  let hasAccess = isReverse;
  const authStatus = useAuthStatus();

  if (authStatus === AUTH_STATUS.NoAuth || authStatus === AUTH_STATUS.Unknown) {
    hasAccess = isReverse;
  }

  if (authStatus === AUTH_STATUS.Auth) {
    hasAccess = !isReverse;
  }

  return hasAccess ? children : <Navigate to={isReverse ? APP_ROUTE.Main : APP_ROUTE.Login} />;
}

export default PrivateRoute;
