import { SortType } from '../../molecules/sort-selector/sort-selector.tsx';

type SortSelectorItemProps = {
  isSelected: boolean;
  value: SortType;
  onClick: (value: SortType) => void;
};

function SortSelectorItem({isSelected, value, onClick}: SortSelectorItemProps) {
  return (
    <li
      className={`places__option ${isSelected ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={onClick.bind(null, value)}
    >
      {value}
    </li>
  );
}

export default SortSelectorItem;
