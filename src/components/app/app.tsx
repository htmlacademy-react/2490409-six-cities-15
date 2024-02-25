import { ReactElement } from 'react';
import {
  FavoritesScreen,
  MainScreen,
  LoginScreen,
  OfferScreen,
  NotFound,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import OfferNotLogged from '../pages/offer-not-logged/offer-not-logged.tsx';
import { PrivateRoute } from '../../routing';

type AppProps = {
  rentOfferCount: number;
};

function App({rentOfferCount}: AppProps): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.OfferNotLogged}
          element={<OfferNotLogged/>}
        />
        <Route
          path={AppRoute.Main}
          element={<MainScreen rentOfferCount={rentOfferCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute isReverse>
              <LoginScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={'*'}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
