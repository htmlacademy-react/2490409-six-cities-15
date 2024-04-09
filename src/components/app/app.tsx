import { ReactElement } from 'react';
import {
  FavoritesPage,
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  ServerErrorPage,
} from '../pages';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../constants';
import { PrivateRoute } from '../../routing';

function App(): ReactElement {
  return (
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainPage/>} />
        <Route path={AppRoute.MainWithCity} element={<MainPage/>} />
      </Route>
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRoute
            allowedAuthStatuses={[AuthStatus.NoAuth, AuthStatus.Unknown]}
            redirectTo={AppRoute.Main}
          >
            <LoginPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferPage/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            allowedAuthStatuses={[AuthStatus.Unknown, AuthStatus.Auth]}
            redirectTo={AppRoute.Login}
          >
            <FavoritesPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage/>}
      />
      <Route
        path={AppRoute.ServerError}
        element={<ServerErrorPage/>}
      />
      <Route
        path={'*'}
        element={<NotFoundPage/>}
      />
    </Routes>
  );
}

export default App;
