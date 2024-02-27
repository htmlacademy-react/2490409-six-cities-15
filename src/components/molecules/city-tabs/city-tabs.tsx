import { ReactElement } from 'react';
import { CITIES } from '../../../constants';
import { TabButton } from '../../atoms';
import {useLocation, useSearchParams} from 'react-router-dom';

function CityTabs(): ReactElement {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const currentTab = searchParams.get('city') || CITIES.Paris;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CITIES).map((cityName) => (
              <TabButton
                key={cityName}
                tabName={cityName}
                isSelected={cityName.toLowerCase() === currentTab.toLowerCase()}
                link={`${pathname}?city=${cityName.toLowerCase()}`}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
