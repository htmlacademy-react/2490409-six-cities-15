import {ReactElement} from 'react';
import GoodListItem from '../../atoms/gool-list-item/gool-list-item.tsx';

type GoodsListProps = {
  goods: string[];
}

function GoodsList({goods}: GoodsListProps): ReactElement {
  const goodsListItems: ReactElement[] = goods.map((good) => <GoodListItem key={good} name={good}/>);

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">{'What\'s inside'}</h2>
      <ul className="offer__inside-list">
        {goodsListItems}
      </ul>
    </div>
  );
}

export default GoodsList;
