import { OffersList, SortSelector } from '..';
import { OfferData } from '../../../mocks';
import { CitiesType } from '../../../constants';

type OfferCardsListProps = {
  offers: OfferData[];
  city: CitiesType;
  handleCardHover: (id?: string) => void;
  handleCardLeave: () => void;
};

function VerticalOfferCardsList({offers, city, handleCardHover, handleCardLeave}: OfferCardsListProps) {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortSelector selectedItemName={'Popular'}/>
      <OffersList
        offers={offers}
        classNames={'cities__places-list places__list tabs__content'}
        handleHoverOnCard={handleCardHover}
        handleCardLeave={handleCardLeave}
        placeType={'cities'}
        hasVerticalLayout
      />
    </section>
  );
}

export default VerticalOfferCardsList;
