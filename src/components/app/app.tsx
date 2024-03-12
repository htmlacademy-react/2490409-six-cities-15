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
import { PrivateRoute } from '../../routing';
import { ScrollToTop } from '../../utils';
import { comments, detailOffer, getOffersInNear } from '../../mocks';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route
          path={APP_ROUTE.Main}
          element={<MainScreen/>}
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
          element={<OfferScreen otherPlacesNear={getOffersInNear(detailOffer)} offer={detailOffer} reviews={comments}/>}
        />
        <Route
          path={APP_ROUTE.Favorites}
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
