import { ReactElement } from 'react';
import { Header, Footer } from '../../organisms';
import { OfferData } from '../../../mocks';
import {FavoritesEmptyState, HorizontalOffersCardsList} from '../../molecules';

type FavoritesScreenProps = {
  offers: OfferData[];
};

function FavoritesScreen({offers}: FavoritesScreenProps): ReactElement {
  const isEmpty = offers.length === 0;
  const divClassName = `page ${isEmpty ? 'page--favorites-empty' : ''}`;
  const mainClassName = `page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`;

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
