import { createAction } from '@reduxjs/toolkit';
import { CitiesType } from '../constants';
import { OfferData } from '../types';

const ACTIONS = {
  changeCity: 'main/changeCity',
  setOffers: 'main/setOffers',
};

const changeCityAction = createAction(
  ACTIONS.changeCity,
  (city: CitiesType) => ({
    payload: city,
  }),
);

const setOffersAction = createAction(
  ACTIONS.setOffers,
  (offers: OfferData[]) => ({
    payload: offers,
  }),
);

export {
  setOffersAction,
  changeCityAction,
};
