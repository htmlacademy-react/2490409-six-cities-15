import { ReactElement } from 'react';
import {
  FavoritesScreen,
  MainScreen,
  LoginScreen,
  OfferScreen,
  NotFound,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_ROUTE } from '../../constants';
import OfferNotLogged from '../pages/offer-not-logged/offer-not-logged.tsx';
import { PrivateRoute } from '../../routing';
import { ScrollToTop } from '../../utils';
import type { OfferData } from '../../mocks';

type AppProps = {
  offers: OfferData[];
};

function App({ offers }: AppProps): ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route
          path={APP_ROUTE.OfferNotLogged}
          element={<OfferNotLogged/>}
        />
        <Route
          path={APP_ROUTE.Main}
          element={<MainScreen offers={offers} />}
        />
        <Route
          path={APP_ROUTE.Login}
          element={
            <PrivateRoute isReverse>
              <LoginScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.Offer}
          element={<OfferScreen/>}
        />
        <Route
          path={APP_ROUTE.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen offers={offers.filter((item) => item.isFavorite)}/>
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