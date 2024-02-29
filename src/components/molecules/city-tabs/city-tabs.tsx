import { ReactElement } from 'react';
import { CITIES, CitiesType } from '../../../constants';
import { TabButton } from '../../atoms';
import { useLocation } from 'react-router-dom';

type CityTabsProps = {
  onCityChanged: (city: CitiesType) => void;
  currTab: CitiesType;
};

const isCity = (value: string): value is CitiesType => (
  Object.values<string>(CITIES).includes(value)
);

function CityTabs({onCityChanged, currTab}: CityTabsProps): ReactElement {
  const { pathname } = useLocation();

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
