import { SortSelectorItem } from '../../atoms';
import { SORT_TYPES } from '../../../constants';

type SortSelectorProps = {
  selectedItemName: typeof SORT_TYPES[number];
};
function SortSelector({selectedItemName}: SortSelectorProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        { selectedItemName }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          SORT_TYPES.map((type) => (
            <SortSelectorItem key={type} isSelected={type === selectedItemName} value={type} />
          ))
        }
      </ul>
    </form>
  );
}

export default SortSelector;
