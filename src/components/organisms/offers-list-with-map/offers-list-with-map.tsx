import { OfferData, CitiesType } from '../../../types';
import { Map, OffersListWithSort } from '../../molecules';
import { offersActions, offersSelectors } from '../../../store/slices/offers';
import { useActionCreators, useAppSelector } from '../../../store/helpers.ts';
import { useCallback } from 'react';

type OffersListWithMapProps = {
  offersFromCurrentCity: OfferData[];
  currentCity: CitiesType;
};

function OffersListWithMap({offersFromCurrentCity, currentCity}: OffersListWithMapProps) {
  const { setActiveOfferId } = useActionCreators(offersActions);
  const handleHoverOnCard = useCallback((id: string) => {
    setActiveOfferId(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCardLeave = useCallback(() => {
    setActiveOfferId(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeOfferId = useAppSelector(offersSelectors.activeOfferId);

  return (
    <>
      <OffersListWithSort
        city={currentCity}
        offers={offersFromCurrentCity}
        handleCardHover={handleHoverOnCard}
        handleCardLeave={handleCardLeave}
      />
      <div className="cities__right-section">
        <Map
          classType="cities"
          locations={offersFromCurrentCity.map((offer) => ({ ...offer.location, id: offer.id }))}
          city={offersFromCurrentCity[0].city}
          selectedCardId={activeOfferId}
        />
      </div>
    </>
  );
}

export default OffersListWithMap;
