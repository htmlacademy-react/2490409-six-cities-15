import classNames from 'classnames';
import { SortTypesType } from '../../../types';

type SortSelectorItemProps = {
  isSelected: boolean;
  value: SortTypesType;
  onClick: (value: SortTypesType) => void;
};

function SortSelectorItem({isSelected, value, onClick}: SortSelectorItemProps) {
  const className = classNames(
    'places__option',
    {'places__option--active': isSelected},
  );

  const handleClick = () => onClick(value);

  return (
    <li
      data-testid="sort-selector-item"
      className={className}
      tabIndex={0}
      onClick={handleClick}
    >
      {value}
    </li>
  );
}

export default SortSelectorItem;
