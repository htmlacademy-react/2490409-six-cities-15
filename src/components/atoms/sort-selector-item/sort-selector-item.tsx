import { SortType } from '../../molecules/sort-selector/sort-selector.tsx';
import classNames from 'classnames';
import {useCallback} from 'react';

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

  const handleOnClick = useCallback(() => onClick(value), [onClick, value]);

  return (
    <li
      className={className}
      tabIndex={0}
      onClick={handleOnClick}
    >
      {value}
    </li>
  );
}

export default SortSelectorItem;
