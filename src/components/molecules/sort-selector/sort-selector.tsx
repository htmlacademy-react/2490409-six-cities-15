import { SortSelectorItem } from '../../atoms';
import { SortTypes } from '../../../constants';
import { SortTypesType } from '../../../types';
import { useBooleanHelpers } from '../../../hooks';
import classNames from 'classnames';

type SortSelectorProps = {
  selectedSort: SortTypesType;
  onSelect: (sort: SortTypesType) => void;
};

function SortSelector({selectedSort, onSelect}: SortSelectorProps) {
  const {isOn: isOpened, off, toggle} = useBooleanHelpers(false);

  const handleSort = (sort: SortTypesType) => {
    onSelect(sort);
    off();
  };

  const ulClasses = classNames(
    'places__options',
    'places__options--custom',
    {'places__options--opened': isOpened},
  );

  return (
    <form className="places__sorting" action="#">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={toggle}>
        { selectedSort }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClasses}>
        {
          Object.values(SortTypes).map((type) => (
            <SortSelectorItem key={type} isSelected={type === selectedSort} value={type} onClick={handleSort}/>
          ))
        }
      </ul>
    </form>
  );
}

export default SortSelector;
