type GoodListItemProps = {
  name: string;
};

function GoodListItem({name}: GoodListItemProps) {
  return <li className="offer__inside-item">{name}</li>;
}

export default GoodListItem;
