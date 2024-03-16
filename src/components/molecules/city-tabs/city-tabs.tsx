import { ReactElement } from 'react';
import { CITIES, CitiesType } from '../../../constants';
import { TabButton } from '../../atoms';
import { createMainRouteWithCity, isCity } from '../../../utils';

type CityTabsProps = {
  onCityChanged: (city: CitiesType) => void;
  currTab: CitiesType;
};

function CityTabs({onCityChanged, currTab}: CityTabsProps): ReactElement {
  const handleTabChange = (city: string) => {
    if (isCity(city)) {
      onCityChanged(city);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CITIES).map((cityName) => (
              <TabButton
                key={cityName}
                tabName={cityName}
                isSelected={cityName.toLowerCase() === currTab.toLowerCase()}
                onClick={handleTabChange}
                link={createMainRouteWithCity(cityName)}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
