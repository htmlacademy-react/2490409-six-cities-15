import { ReactElement } from 'react';
import { Header, Footer } from '../../organisms';
import { OfferData } from '../../../mocks';
import { FavoritesEmptyState, HorizontalOffersCardsList } from '../../molecules';
import classNames from 'classnames';

type FavoritesScreenProps = {
  offers: OfferData[];
};

function FavoritesScreen({offers}: FavoritesScreenProps): ReactElement {
  const isEmpty = offers.length === 0;
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
          { isEmpty ? <FavoritesEmptyState/> : <HorizontalOffersCardsList offers={offers} /> }
        </div>
      </main>
      <Footer/>
    </div>

  );
}

export default FavoritesScreen;
