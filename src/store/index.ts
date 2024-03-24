import { configureStore } from '@reduxjs/toolkit';
import { API } from '../services';
import { rootReducer } from './root-reducer.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: API,
      },
    }),
});
