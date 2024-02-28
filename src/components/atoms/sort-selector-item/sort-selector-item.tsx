import { SortType } from '../../molecules/sort-selector/sort-selector.tsx';

type SortSelectorItemProps = {
  isSelected: boolean;
  value: SortType;
  onSelected: (value: SortType) => void;
};

function SortSelectorItem({isSelected, value, onSelected}: SortSelectorItemProps) {
  return (
    <li
      className={`places__option ${isSelected ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={onSelected.bind(null, value)}
    >
      {value}
    </li>
  );
}

export default SortSelectorItem;
