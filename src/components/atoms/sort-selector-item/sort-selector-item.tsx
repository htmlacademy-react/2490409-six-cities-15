import { SortType } from '../../molecules/sort-selector/sort-selector.tsx';
import classNames from 'classnames';

type SortSelectorItemProps = {
  isSelected: boolean;
  value: SortType;
  onClick: (value: SortType) => void;
};

function SortSelectorItem({isSelected, value, onClick}: SortSelectorItemProps) {
  const className = classNames(
    'places__option',
    {'places__option--active': isSelected},
  );

  return (
    <li
      className={className}
      tabIndex={0}
      onClick={onClick.bind(null, value)}
    >
      {value}
    </li>
  );
}

export default SortSelectorItem;
