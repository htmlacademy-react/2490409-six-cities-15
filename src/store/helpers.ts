import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './index.ts';
import { Action, ActionCreatorsMapObject, bindActionCreators, createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { AxiosInstance } from 'axios';
import { createAPI } from '../services';

type StoreStateType = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
type AppThunkDispatch = ThunkDispatch<StoreStateType, ReturnType<typeof createAPI>, Action>;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

const setOfferIdInRoute = (route: string, id: string) => route.replace(':offerId', id);
const setFavoriteStatusInRoute = (route: string, status: boolean) => route.replace(':status', status ? '1' : '0');

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
  setFavoriteStatusInRoute,
  createAppAsyncThunk,
};

export type {
  StoreStateType,
  AppDispatch,
  AppThunkDispatch,
  AsyncActionsArgsType,
};

