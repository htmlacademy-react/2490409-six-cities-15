import { OfferCard } from '../index.ts';
import { OfferData } from '../../../mocks';

type OffersListProps = {
  offers: OfferData[];
  classNames: string;
  handleHoverOnCard?: (id?: string) => void;
  handleCardLeave?: () => void;
  placeType: 'cities' | 'near-places' | 'favorites';
  hasVerticalLayout: boolean;
};

function OffersList({handleHoverOnCard = ()=> {}, handleCardLeave = () => {}, ...props}: OffersListProps) {
  return (
    <div className={props.classNames}>
      {
        props.offers.map((place) => (
          <OfferCard
            {...place}
            key={place.id}
            onMouseOver={handleHoverOnCard}
            onMouseOut={handleCardLeave}
            placeType={props.placeType}
            hasVerticalLayout={props.hasVerticalLayout}
          />
        ))
      }
    </div>
  );
}

export default OffersList;
