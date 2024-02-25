import { ReactElement } from 'react';
import MainScreen from '../pages/main/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../constants/routes.tsx';
import Login from '../pages/login/login.tsx';
import Favorites from '../pages/favorites/favorites.tsx';
import Offer from '../pages/offer/offer.tsx';
import OfferNotLogged from '../pages/offer-not-logged/offer-not-logged.tsx';
import NotFound from '../pages/not-found/not-found.tsx';

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
          element={<Login/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites/>}
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
