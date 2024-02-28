import { Link } from 'react-router-dom';
import { CitiesType } from '../../../constants';

type TabButtonProps = {
  tabName: CitiesType;
  isSelected: boolean;
  onClick: (name: CitiesType) => void;
  link?: string;
};

function TabButton({tabName, isSelected, onClick, link = '#'}: TabButtonProps) {
  const locationClassName = `locations__item-link tabs__item ${ isSelected ? 'tabs__item--active' : ''}`;

  const handleOnClick = () => {
    onClick(tabName);
  };

  return (
    <li className="locations__item" onClick={handleOnClick}>
      <Link
        className={locationClassName}
        to={link}
      >
        <span>{tabName}</span>
      </Link>
    </li>
  );
}

export default TabButton;
