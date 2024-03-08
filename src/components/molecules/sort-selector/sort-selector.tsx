import { SortSelectorItem } from '../../atoms';
import { SORT_TYPES } from '../../../constants';
import {useState} from 'react';

type SortType = typeof SORT_TYPES[keyof typeof SORT_TYPES];

type SortSelectorProps = {
  selectedItemName: SortType;
};
function SortSelector({selectedItemName}: SortSelectorProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [sort, setSort] = useState(selectedItemName);

  const handleOpenState = () => {
    setIsOpened((openState) => !openState);
  };

  const handleSort = (value: SortType) => {
    setSort(value);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenState}>
        { sort }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpened && (
          <ul className="places__options places__options--custom places__options--opened">
            {
              Object.values(SORT_TYPES).map((type) => (
                <SortSelectorItem key={type} isSelected={type === sort} value={type} onClick={handleSort}/>
              ))
            }
          </ul>
        )
      }
    </form>
  );
}

export default SortSelector;
export type { SortType };
