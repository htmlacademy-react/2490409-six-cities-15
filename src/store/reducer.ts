import { createReducer } from '@reduxjs/toolkit';
import { CITIES, CitiesType } from '../constants';
import { OfferData } from '../types';
import { offers } from '../mocks';
import { changeCityAction, setOffersAction } from './action.ts';

type InitialStateProps = {
  currentCity: CitiesType;
  offers: OfferData[];
};

const initialState: InitialStateProps = {
  currentCity: CITIES.Paris,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

