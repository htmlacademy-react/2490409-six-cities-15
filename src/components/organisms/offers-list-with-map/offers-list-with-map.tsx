import { OfferData } from '../../../types';
import { CitiesType } from '../../../constants';
import { Map, OffersListWithSort } from '../../molecules';
import { offersActions, offerSelectors } from '../../../store/slices/offers';
import {useActionCreators, useAppSelector} from '../../../store/helpers.ts';

type OffersListWithMapProps = {
  offersFromCurrentCity: OfferData[];
  currentCity: CitiesType;
};

function OffersListWithMap({offersFromCurrentCity, currentCity}: OffersListWithMapProps) {
  const { setActiveOfferId } = useActionCreators(offersActions);
  const handleHoverOnCard = (id?: string) => {
    setActiveOfferId(id);
  };
  const handleCardLeave = () => {
    setActiveOfferId();
  };

  const activeOfferId = useAppSelector(offerSelectors.activeOfferId);

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
