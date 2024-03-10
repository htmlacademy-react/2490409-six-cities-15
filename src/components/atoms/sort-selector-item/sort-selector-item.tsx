import classNames from 'classnames';
import { useCallback } from 'react';
import { TSortTypes } from '../../../constants';

type SortSelectorItemProps = {
  isSelected: boolean;
  value: TSortTypes;
  onClick: (value: TSortTypes) => void;
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
