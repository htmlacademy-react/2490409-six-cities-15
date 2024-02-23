type SortSelectorItemProps = {
  isSelected: boolean;
  value: string;
};

function SortSelectorItem({isSelected, value}: SortSelectorItemProps) {
  return <li className={`places__option ${isSelected ? 'places__option--active' : ''}`} tabIndex={0}>{value}</li>;
}

export default SortSelectorItem;
