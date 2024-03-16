import { TabButton } from '../../atoms';
import { APP_ROUTE, CitiesType } from '../../../constants';
import { OffersList } from '..';
import { OfferData } from '../../../types';

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
      <OffersList
        offers={offers}
        classNames={'favorites__places'}
        handleHoverOnCard={() => {}}
        handleCardLeave={() => {}}
        hasVerticalLayout={false}
        placeType={'favorites'}
      />
    </li>
  );
}

export default OffersByLocationSection;
