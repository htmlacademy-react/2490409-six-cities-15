import { Link } from 'react-router-dom';
import classNames from 'classnames';

type TabButtonProps = {
  tabName: string;
  isSelected: boolean;
  onClick?: (name: string) => void;
  link?: string;
};

function TabButton({tabName, isSelected, onClick = () => {}, link = '#'}: TabButtonProps) {
  const locationClassName = classNames(
    'locations__item-link',
    'tabs__item',
    {'tabs__item--active': isSelected},
  );

  const handleClick = () => {
    onClick(tabName);
  };

  return (
    <div className="locations__item" onClick={handleClick}>
      <Link
        className={locationClassName}
        to={link}
      >
        <span>{tabName}</span>
      </Link>
    </div>
  );
}

export default TabButton;
