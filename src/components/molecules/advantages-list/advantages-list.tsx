import { ReactElement } from 'react';
import { AdvantageListItem } from '../../atoms';

type AdvantagesListProps = {
  advantages: string[];
}

function AdvantagesList({advantages}: AdvantagesListProps): ReactElement {
  const goodsListItems: ReactElement[] = advantages.map((advantage) => <AdvantageListItem key={advantage} name={advantage}/>);

  return (
    <div className="offer__inside" data-testid="advantages-list">
      <h2 className="offer__inside-title">{'What\'s inside'}</h2>
      <ul className="offer__inside-list">
        {goodsListItems}
      </ul>
    </div>
  );
}

export default AdvantagesList;
