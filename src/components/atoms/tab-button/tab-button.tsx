import { Link } from 'react-router-dom';

type TabButtonProps = {
  tabName: string;
  isSelected: boolean;
  link?: string;
};

function TabButton({tabName, isSelected, link = '#'}: TabButtonProps) {
  const locationClassName = `locations__item-link tabs__item ${ isSelected ? 'tabs__item--active' : ''}`;

  return (
    <li className="locations__item">
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
