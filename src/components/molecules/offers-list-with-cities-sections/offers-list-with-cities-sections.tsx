import { CitiesType } from '../../../constants';
import { OfferData } from '../../../types';
import { OffersByLocationSection } from '../../molecules';

type HorizontalOffersCardsListProps = {
  offers: OfferData[];
};

type SortedByCitiesOffers = {
  [city in CitiesType]?: OfferData[];
};

const getOffersSortedByCities = (offers: OfferData[]) => offers.reduce((res, offer) => {
  const cityName = offer.city.name;
  const newRes: SortedByCitiesOffers = res;

  if (!Array.isArray(newRes[cityName])) {
    newRes[cityName] = [];
  }

  newRes[cityName]?.push(offer);

  return res;
}, {});

function OffersListWithCitiesSections({offers}: HorizontalOffersCardsListProps) {
  const sortedOffers: SortedByCitiesOffers = getOffersSortedByCities(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.entries(sortedOffers).map(([cityName, offersArray]) => (
            <OffersByLocationSection key={cityName} offers={offersArray} city={cityName as CitiesType} />
          ))
        }
      </ul>
    </section>
  );
}

export default OffersListWithCitiesSections;
