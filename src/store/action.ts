import { createAction } from '@reduxjs/toolkit';
import { CitiesType } from '../constants';
import { OfferData } from '../types';

const ACTIONS = {
  changeCity: 'main/changeCity',
  setOffers: 'main/setOffers',
};

const changeCityAction = createAction<{city: CitiesType}>(ACTIONS.changeCity);

const setOffersAction = createAction<{offers: OfferData[]}>(ACTIONS.setOffers);

export {
  setOffersAction,
  changeCityAction,
};
