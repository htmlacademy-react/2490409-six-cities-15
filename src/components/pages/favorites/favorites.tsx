import { ReactElement } from 'react';
import { Header, Footer } from '../../organisms';
import { FavoritesEmptyState, OffersListWithCitiesSections } from '../../molecules';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../store/helpers.ts';
import { offersSelectors } from '../../../store/slices/offers';
import { fetchFavoritesOffersAction } from '../../../store/slices/offers/thunk.ts';

function FavoritesPage(): ReactElement {
  const dispatch = useAppDispatch();
  dispatch(fetchFavoritesOffersAction());

  const favoriteOffers = useAppSelector(offersSelectors.favoriteOffers);

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
    <div className={divClassName}>
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
