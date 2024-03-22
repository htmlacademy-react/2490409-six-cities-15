import { ReactElement } from 'react';
import {
  FavoritesPage,
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {APP_ROUTE, AUTH_STATUS} from '../../constants';
import { PrivateRoute } from '../../routing';
import { ScrollToTop } from '../../utils';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path={APP_ROUTE.Main}>
          <Route index element={<MainPage/>} />
          <Route path={APP_ROUTE.MainWithCity} element={<MainPage/>} />
        </Route>
        <Route
          path={APP_ROUTE.Login}
          element={
            <PrivateRoute
              allowedAuthStatuses={[AUTH_STATUS.Unknown, AUTH_STATUS.NoAuth]}
              redirectTo={APP_ROUTE.Main}
            >
              <LoginPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.Offer}
          element={<OfferPage/>}
        />
        <Route
          path={APP_ROUTE.Favorites}
          element={
            <PrivateRoute
              allowedAuthStatuses={AUTH_STATUS.Auth}
              redirectTo={APP_ROUTE.Login}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={'*'}
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
