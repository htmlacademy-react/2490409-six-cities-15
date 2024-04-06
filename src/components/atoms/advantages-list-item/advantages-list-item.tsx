type AdvantageListItemProps = {
  name: string;
};

function AdvantageListItem({name}: AdvantageListItemProps) {
  return <li className="offer__inside-item">{name}</li>;
}

export default AdvantageListItem;
