import { CITIES } from '../../../constants/cities.ts';
import TabButton from '../../atoms/city-tab-button/tab-button.tsx';

function CityTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CITIES).map((cityName) => (
              <TabButton key={cityName} tabName={cityName} isSelected={false}/>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
