import { OfferData } from '../../../mocks';
import { CitiesType } from '../../../constants';
import { Map, VerticalOfferCardsList } from '../../molecules';

type OffersListWithMapProps = {
  offers: OfferData[];
  currCity: CitiesType;
};

function OffersListWithMap({offers, currCity}: OffersListWithMapProps) {
  const getOffersByCity = (city: CitiesType) => offers.filter((offer) => offer.city.name === city);
  const offersByCity = getOffersByCity(currCity);

  return (
    <>
      <VerticalOfferCardsList city={currCity} offers={offersByCity} />
      <div className="cities__right-section">
        <Map locations={offersByCity.map((offer) => offer.location)} city={offersByCity[0].city} />
      </div>
    </>
  );
}

export default OffersListWithMap;
