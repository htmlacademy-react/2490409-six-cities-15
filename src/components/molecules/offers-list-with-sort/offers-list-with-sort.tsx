import { OffersList, SortSelector } from '..';
import { OfferData } from '../../../mocks';
import {CitiesType, SORT_TYPES, TSortTypes} from '../../../constants';
import {useState} from 'react';
import {useOffersSort} from '../../../hooks/useOffersSort.ts';

type OfferCardsListProps = {
  offers: OfferData[];
  city: CitiesType;
  handleCardHover: (id?: string) => void;
  handleCardLeave: () => void;
};

function OffersListWithSort({offers, city, handleCardHover, handleCardLeave}: OfferCardsListProps) {

  const [currentSort, setCurrentSort] = useState<TSortTypes>(SORT_TYPES.Popular);

  const handleSetSort = (sort: TSortTypes) => {
    setCurrentSort(sort);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortSelector selectedSort={currentSort} onSelect={handleSetSort}/>
      <OffersList
        offers={useOffersSort(currentSort, offers)}
        classNames={'cities__places-list places__list tabs__content'}
        handleHoverOnCard={handleCardHover}
        handleCardLeave={handleCardLeave}
        placeType={'cities'}
        hasVerticalLayout
      />
    </section>
  );
}

export default OffersListWithSort;
