import { OfferData } from '../../../mocks';
import { CitiesType } from '../../../constants';
import { VerticalOfferCardsList } from '../../molecules';

type OffersListWithMapProps = {
  offers: OfferData[];
  currCity: CitiesType;
};

function OffersListWithMap({offers, currCity}: OffersListWithMapProps) {
  const getOffersByCity = (city: CitiesType) => offers.filter((offer) => offer.city.name === city);

  return (
    <>
      <VerticalOfferCardsList city={currCity} offers={getOffersByCity(currCity)} />
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </>
  );
}

export default OffersListWithMap;
