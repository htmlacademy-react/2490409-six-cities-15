type sortSelectorItemProps = {
  isSelected: boolean;
  value: string;
};
function SortSelectorItem({isSelected, value}: sortSelectorItemProps) {
  return <li className={`places__option ${isSelected ? 'places__option--active' : ''}`} tabIndex={0}>{value}</li>;
}

export default SortSelectorItem;
