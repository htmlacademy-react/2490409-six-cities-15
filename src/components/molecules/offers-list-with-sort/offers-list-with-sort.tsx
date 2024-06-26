import { OffersList, SortSelector } from '..';
import { OfferData } from '../../../types';
import { SortTypes } from '../../../constants';
import { CitiesType, SortTypesType } from '../../../types';
import { useCallback, useState } from 'react';
import { sortOffers } from '../../../utils';

type OfferCardsListProps = {
  offers: OfferData[];
  city: CitiesType;
  handleCardHover: (id: string) => void;
  handleCardLeave: () => void;
};

function OffersListWithSort({offers, city, handleCardHover, handleCardLeave}: OfferCardsListProps) {

  const [currentSort , setCurrentSort] = useState<SortTypesType>(SortTypes.Popular);

  const handleSetSort = useCallback((sort: SortTypesType) => {
    setCurrentSort(sort);
  }, []);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} place{offers.length > 1 && 's'} to stay in {city}</b>
      <SortSelector selectedSort={currentSort} onSelect={handleSetSort}/>
      <OffersList
        offers={sortOffers(currentSort, offers)}
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
