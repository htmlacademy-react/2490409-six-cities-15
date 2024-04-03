import { OfferCard } from '..';
import { OfferCardStyleClassType, OfferData } from '../../../types';

type OffersListProps = {
  offers: OfferData[];
  classNames: string;
  handleHoverOnCard?: (id: string) => void;
  handleCardLeave?: () => void;
  placeType: OfferCardStyleClassType;
  hasVerticalLayout: boolean;
};

function OffersList(props: OffersListProps) {
  return (
    <div className={props.classNames}>
      {
        props.offers.map((place) => (
          <OfferCard
            {...place}
            key={place.id}
            onMouseEnter={props.handleHoverOnCard}
            onMouseLeave={props.handleCardLeave}
            placeType={props.placeType}
            hasVerticalLayout={props.hasVerticalLayout}
          />
        ))
      }
    </div>
  );
}

export default OffersList;
