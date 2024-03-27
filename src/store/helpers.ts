import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './index.ts';
import {ActionCreatorsMapObject, bindActionCreators, createAsyncThunk} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { AxiosInstance } from 'axios';

type StoreStateType = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

const setOfferIdInRoute = (route: string, id: string) => route.replace(':offerId', id);

type AsyncActionsArgsType = {
  state: StoreStateType;
  dispatch: AppDispatch;
  rejectValue: string;
  extra: AxiosInstance;
};

const createAppAsyncThunk = createAsyncThunk.withTypes<AsyncActionsArgsType>();

export {
  useAppDispatch,
  useAppSelector,
  useActionCreators,
  setOfferIdInRoute,
  createAppAsyncThunk,
};

export type {
  StoreStateType,
  AppDispatch,
  AsyncActionsArgsType,
};

