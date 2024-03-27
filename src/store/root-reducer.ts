import { combineReducers } from '@reduxjs/toolkit';
import { sliceName as offersSliceName } from './slices/offers/meta.ts';
import { sliceName as userSliceName } from './slices/user/meta.ts';
import { sliceName as detailOfferName } from './slices/detail-offer/meta.ts';
import { offersSlice } from './slices/offers';
import { userSlice } from './slices/user';
import { detailOfferSlice } from './slices/detail-offer';

const rootReducer = combineReducers({
  [offersSliceName]: offersSlice.reducer,
  [userSliceName]: userSlice.reducer,
  [detailOfferName]: detailOfferSlice.reducer,
});

export {
  rootReducer,
};
