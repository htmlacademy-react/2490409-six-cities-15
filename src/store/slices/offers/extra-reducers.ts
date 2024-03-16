import { OffersStateType } from './index.ts';

const clearOffers = (state: OffersStateType) => {
  state.offers = [];
};

const setOffersLoading = (state: OffersStateType) => {
  state.isLoading = true;
};

export {
  clearOffers,
  setOffersLoading,
};
