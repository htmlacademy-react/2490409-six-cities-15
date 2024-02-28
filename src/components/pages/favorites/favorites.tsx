import { ReactElement } from 'react';
import { Header, Footer } from '../../organisms';
import { OfferData } from '../../../mocks';
import { HorizontalOffersCardsList } from '../../molecules';

type FavoritesScreenProps = {
  offers: OfferData[];
};

function FavoritesScreen({offers}: FavoritesScreenProps): ReactElement {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <HorizontalOffersCardsList offers={offers} />
        </div>
      </main>
      <Footer/>
    </div>

  );
}

export default FavoritesScreen;
