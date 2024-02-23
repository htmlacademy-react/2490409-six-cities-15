import {CITIES} from '../../../constants/cities.ts';

type CityTabButtonProps = {
  cityName: typeof CITIES[number];
  isSelected: boolean;
};

function CityTabButton({cityName, isSelected}: CityTabButtonProps) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${ isSelected ? 'tabs__item--active' : ''}`}
        href={isSelected ? '#' : '/' /* todo: add real link */}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityTabButton;
