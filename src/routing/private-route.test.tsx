import { createMemoryHistory, MemoryHistory } from 'history';
import { makeFakeUserState, makeRandomAppRoute, makeRandomAuthStatus, withHistory } from '../utils/tests';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './index.ts';
import { render, screen } from '@testing-library/react';
import { withStore } from '../utils/tests';
import { sliceName } from '../store/slices/user/meta.ts';

describe('Private Route component', () => {
  let mockHistory: MemoryHistory;
  const privateRoute = makeRandomAppRoute();
  const publicRoute = makeRandomAppRoute([privateRoute]);

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(privateRoute);
  });

  it('should render component for public route, when user is not allowed to visit private route', () => {
    const publicComponent = 'public route';
    const privateComponent = 'private route';

    const userAuthStatus = makeRandomAuthStatus();
    const allowedStatus = makeRandomAuthStatus([userAuthStatus]);

    const userState = makeFakeUserState({
      authorizationStatus: userAuthStatus,
    });

    const { withStoreComponent} = withStore(
      withHistory(
        <Routes>
          <Route
            path={publicRoute}
            element={publicComponent}
          />
          <Route
            path={privateRoute}
            element={
              <PrivateRoute
                allowedAuthStatuses={allowedStatus}
                redirectTo={publicRoute}
              >
                {privateComponent}
              </PrivateRoute>
            }
          />
        </Routes>,
        mockHistory,
      ),
      {
        [sliceName]: userState,
      }
    );

    render(withStoreComponent);

    expect(screen.getByText(publicComponent)).toBeInTheDocument();
    expect(screen.queryByText(privateComponent)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user is allowed to visit private route', () => {
    const publicComponent = 'public route';
    const privateComponent = 'private route';

    const userAuthStatus = makeRandomAuthStatus();
    const allowedStatus = userAuthStatus;

    const userState = makeFakeUserState({
      authorizationStatus: userAuthStatus,
    });

    const { withStoreComponent} = withStore(
      withHistory(
        <Routes>
          <Route
            path={publicRoute}
            element={publicComponent}
          />
          <Route
            path={privateRoute}
            element={
              <PrivateRoute
                allowedAuthStatuses={allowedStatus}
                redirectTo={publicRoute}
              >
                {privateComponent}
              </PrivateRoute>
            }
          />
        </Routes>,
        mockHistory,
      ),
      {
        [sliceName]: userState,
      }
    );

    render(withStoreComponent);

    expect(screen.getByText(privateComponent)).toBeInTheDocument();
    expect(screen.queryByText(publicComponent)).not.toBeInTheDocument();
  });
});
