import { OffersStateType } from './index.ts';

const clearOffers = (state: OffersStateType) => {
  state.offers = [];
};

export {
  clearOffers,
};
