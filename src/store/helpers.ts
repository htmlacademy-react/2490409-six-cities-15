import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './index.ts';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { AxiosInstance } from 'axios';

type StoreStateType = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

// type BoundActions<Actions extends ActionCreatorsMapObject> = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key in keyof Actions]?: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
// };
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions)/*:  BoundActions<Actions> */ => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

const setOfferIdInRoute = (route: string, id: string) => route.replace(':offerId', id);

type AsyncActionsArgsType = {
  dispatch: AppDispatch;
  state: StoreStateType;
  extra: AxiosInstance;
};

export {
  useAppDispatch,
  useAppSelector,
  useActionCreators,
  setOfferIdInRoute,
};

export type {
  StoreStateType,
  AppDispatch,
  AsyncActionsArgsType,
};

