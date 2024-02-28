import { VerticalOfferCard, SortSelector } from '../index.ts';
import { OfferData } from '../../../mocks';
import { useState } from 'react';

type OfferCardsListProps = {
  offers: OfferData[];
};

function VerticalOfferCardsList({offers}: OfferCardsListProps) {
  const [ , setMouseOveredCardId] = useState('');

  const handleMouseOver = (id: string) => {
    setMouseOveredCardId(id);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <SortSelector selectedItemName={'Popular'}/>
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer: OfferData) => (
            <VerticalOfferCard
              id={offer.id}
              key={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              previewImage={offer.previewImage}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              rating={offer.rating}
              onMouseOver={ handleMouseOver }
            />
          ))
        }
      </div>
    </section>
  );
}

export default VerticalOfferCardsList;
