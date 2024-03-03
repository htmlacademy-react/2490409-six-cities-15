import { OfferData } from '../../../mocks';
import { CitiesType } from '../../../constants';
import { Map, OffersListWithSort } from '../../molecules';
import { useHoverHandlers } from '../../../hooks';

type OffersListWithMapProps = {
  offers: OfferData[];
  currCity: CitiesType;
};

function OffersListWithMap({offers, currCity}: OffersListWithMapProps) {
  const getOffersByCity = (city: CitiesType) => offers.filter((offer) => offer.city.name === city);
  const offersByCity = getOffersByCity(currCity);

  const [
    hoveredCardId,
    handleHoverOnCard,
    handleCardLeave,
  ] = useHoverHandlers();

  return (
    <>
      <OffersListWithSort
        city={currCity}
        offers={offersByCity}
        handleCardHover={handleHoverOnCard}
        handleCardLeave={handleCardLeave}
      />
      <div className="cities__right-section">
        <Map
          classType="cities"
          locations={offersByCity.map((offer) => ({ ...offer.location, id: offer.id }))}
          city={offersByCity[0].city}
          selectedCardId={hoveredCardId}
        />
      </div>
    </>
  );
}

export default OffersListWithMap;
