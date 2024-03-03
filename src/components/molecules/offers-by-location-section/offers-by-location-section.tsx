import {TabButton} from '../../atoms';
import {APP_ROUTE, CitiesType} from '../../../constants';
import {OfferCard} from '../index.ts';
import {OfferData} from '../../../mocks';

type OffersByLocationSectionProps = {
  offers: OfferData[];
  city: CitiesType;
};

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

export default OffersByLocationSection;
