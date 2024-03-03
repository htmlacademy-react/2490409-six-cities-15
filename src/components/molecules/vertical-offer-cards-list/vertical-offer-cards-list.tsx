import { OfferCard, SortSelector } from '../index.ts';
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
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer: OfferData) => (
            <OfferCard
              key={offer.id}
              {...offer}
              onMouseOver={handleCardHover}
              onMouseOut={handleCardLeave}
              placeType={'cities'}
              hasVerticalLayout
            />
          ))
        }
      </div>
    </section>
  );
}

export default VerticalOfferCardsList;
