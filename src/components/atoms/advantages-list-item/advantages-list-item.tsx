type AdvantageListItemProps = {
  name: string;
};

function AdvantageListItem({name}: AdvantageListItemProps) {
  return <li className="offer__inside-item" data-testid="advantages-list-item">{name}</li>;
}

export default AdvantageListItem;
