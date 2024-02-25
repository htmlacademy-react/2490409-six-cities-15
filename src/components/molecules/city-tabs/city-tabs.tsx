import { CITIES } from '../../../constants';
import { TabButton } from '../../atoms';

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
