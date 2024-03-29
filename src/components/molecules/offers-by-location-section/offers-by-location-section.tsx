import { TabButton } from '../../atoms';
import { CitiesType } from '../../../constants';
import { OffersList } from '..';
import { OfferData } from '../../../types';
import {createMainRouteWithCity} from '../../../utils';

type OffersByLocationSectionProps = {
  offers: OfferData[];
  city: CitiesType;
};

function OffersByLocationSection({offers, city}: OffersByLocationSectionProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <TabButton tabName={city} link={createMainRouteWithCity(city)} isSelected/>
      </div>
      <OffersList
        offers={offers}
        classNames={'favorites__places'}
        hasVerticalLayout={false}
        placeType={'favorites'}
      />
    </li>
  );
}

export default OffersByLocationSection;
