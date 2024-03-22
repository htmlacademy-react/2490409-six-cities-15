import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAuthStatus } from '../../hooks';
import { AuthStatusType } from '../../types';

type PrivateRouteProps = PropsWithChildren<{
  allowedAuthStatuses: AuthStatusType | AuthStatusType[];
  redirectTo: string;
}>;

function PrivateRoute({children, allowedAuthStatuses, redirectTo}: PrivateRouteProps) {
  const currentAuthStatus = useAuthStatus();
  const preparedAuthStatuses = Array.isArray(allowedAuthStatuses) ? allowedAuthStatuses : [allowedAuthStatuses];
  const isAllowed = preparedAuthStatuses.includes(currentAuthStatus);

  return isAllowed ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
