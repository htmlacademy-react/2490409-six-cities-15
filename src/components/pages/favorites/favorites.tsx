import { ReactElement, useEffect } from 'react';
import { Header, Footer } from '../../organisms';
import { FavoritesEmptyState, OffersListWithCitiesSections } from '../../molecules';
import classNames from 'classnames';
import { useAppDispatch } from '../../../store/helpers.ts';
import { fetchFavoritesOffersAction } from '../../../store/slices/offers/thunk.ts';
import { useAuthStatus, useFavoriteOffers } from '../../../hooks';
import { AuthStatus } from '../../../constants';
import { AuthStatusType } from '../../../types';

function FavoritesPage(): ReactElement {
  const dispatch = useAppDispatch();
  const authStatus: AuthStatusType = useAuthStatus();

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoritesOffersAction());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStatus]);

  const favoriteOffers = useFavoriteOffers();
  const isEmpty = favoriteOffers.length === 0;
  const divClassName = classNames(
    'page',
    {'page--favorites-empty': isEmpty},
  );
  const mainClassName = classNames(
    'page__main',
    'page__main--favorites',
    {'page__main--favorites-empty': isEmpty},
  );

  return (
    <div className={divClassName} data-testid="favorites-page">
      <Header/>
      <main className={mainClassName}>
        <div className="page__favorites-container container">
          {
            isEmpty
              ? <FavoritesEmptyState/>
              : <OffersListWithCitiesSections offers={favoriteOffers} />
          }
        </div>
      </main>
      <Footer/>
    </div>

  );
}

export default FavoritesPage;
