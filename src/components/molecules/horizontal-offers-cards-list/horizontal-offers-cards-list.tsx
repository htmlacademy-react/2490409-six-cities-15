import { TabButton } from '../../atoms';
import {APP_ROUTE, CitiesType} from '../../../constants';
import { OfferData } from '../../../mocks';
import { OfferCard } from '../../molecules';

type HorizontalOffersCardsListProps = {
  offers: OfferData[];
};

type OffersByLocationSectionProps = {
  offers: OfferData[];
  city: CitiesType;
};

type SortedByCitiesOffers = {
  [city in CitiesType]?: OfferData[];
};

const getOffersSortedByCities = (offers: OfferData[]) => offers.reduce((res, offer) => {
  const cityName = offer.city.name as CitiesType;
  const newRes: SortedByCitiesOffers = res;

  if (!Array.isArray(newRes[cityName])) {
    newRes[cityName] = [];
  }

  newRes[cityName]?.push(offer);

  return res;
}, {});

function OffersByLocationSection({offers, city}: OffersByLocationSectionProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <TabButton tabName={city} link={`${APP_ROUTE.Main}?city=${city}`} isSelected/>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              {...offer}
              hasVerticalLayout={false}
              placeType={'favorites'}
            />
          ))
        }
      </div>
    </li>
  );
}

function HorizontalOffersCardsList({offers}: HorizontalOffersCardsListProps) {
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

export default HorizontalOffersCardsList;
