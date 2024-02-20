import { CITIES } from '../../../constants/cities.ts';
import CityTabButton from '../../atoms/city-tab-button/city-tab-button.tsx';

function CityTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityName) => (
            <CityTabButton key={cityName} cityName={cityName} isSelected={false}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
