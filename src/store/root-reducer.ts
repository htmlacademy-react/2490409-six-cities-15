import { combineReducers } from '@reduxjs/toolkit';
import { sliceName as offersSliceName } from './slices/offers/meta.ts';
import { sliceName as userSliceName } from './slices/user/meta.ts';
import { offersSlice } from './slices/offers';
import { userSlice } from './slices/user';

const rootReducer = combineReducers({
  [offersSliceName]: offersSlice.reducer,
  [userSliceName]: userSlice.reducer,
});

export {
  rootReducer,
};
