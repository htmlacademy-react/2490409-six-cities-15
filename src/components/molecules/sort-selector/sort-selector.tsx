import { SortSelectorItem } from '../../atoms';
import { SORT_TYPES, TSortTypes } from '../../../constants';
import { useState } from 'react';

type SortSelectorProps = {
  selectedSort: TSortTypes;
  onSelect: (sort: TSortTypes) => void;
};

function SortSelector({selectedSort, onSelect}: SortSelectorProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenState = () => {
    setIsOpened((openState) => !openState);
  };

  const handleSort = (sort: TSortTypes) => {
    onSelect(sort);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenState}>
        { selectedSort }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpened && (
          <ul className="places__options places__options--custom places__options--opened">
            {
              Object.values(SORT_TYPES).map((type) => (
                <SortSelectorItem key={type} isSelected={type === selectedSort} value={type} onClick={handleSort}/>
              ))
            }
          </ul>
        )
      }
    </form>
  );
}

export default SortSelector;
