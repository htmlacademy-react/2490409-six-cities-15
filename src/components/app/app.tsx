import { ReactElement } from 'react';
import {
  FavoritesPage,
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
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
        <Route path={APP_ROUTE.Main}>
          <Route index element={<MainPage/>}></Route>
          <Route path={APP_ROUTE.MainWithCity} element={<MainPage/>}></Route>
        </Route>
        <Route
          path={APP_ROUTE.Login}
          element={
            <PrivateRoute isReverse>
              <LoginPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={APP_ROUTE.Offer}
          element={<OfferPage otherPlacesNear={getOffersInNear(detailOffer)} offer={detailOffer} reviews={comments}/>}
        />
        <Route
          path={APP_ROUTE.Favorites}
          element={
            <PrivateRoute>
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
