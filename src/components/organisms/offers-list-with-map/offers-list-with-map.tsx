import { OfferData } from '../../../mocks';
import { CitiesType } from '../../../constants';
import { Map, VerticalOfferCardsList } from '../../molecules';
import { useState } from 'react';
import { Nullable } from 'vitest';

type OffersListWithMapProps = {
  offers: OfferData[];
  currCity: CitiesType;
};

function OffersListWithMap({offers, currCity}: OffersListWithMapProps) {
  const getOffersByCity = (city: CitiesType) => offers.filter((offer) => offer.city.name === city);
  const offersByCity = getOffersByCity(currCity);

  const [ hoveredCardId, setHoveredCardId] = useState<Nullable<string>>(null);

  const handleHoverOnCard = (id?: string) => {
    setHoveredCardId(id);
  };

  const handleCardLeave = () => {
    setHoveredCardId(null);
  };

  return (
    <>
      <VerticalOfferCardsList
        city={currCity}
        offers={offersByCity}
        handleCardHover={handleHoverOnCard}
        handleCardLeave={handleCardLeave}
      />
      <div className="cities__right-section">
        <Map
          locations={offersByCity.map((offer) => ({ ...offer.location, id: offer.id }))}
          city={offersByCity[0].city}
          selectedCardId={hoveredCardId}
        />
      </div>
    </>
  );
}

export default OffersListWithMap;
