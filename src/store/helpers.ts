import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './index.ts';
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { AxiosInstance } from 'axios';

type StoreStateType = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

type AsyncActionsArgsType = {
  dispatch: AppDispatch;
  state: StoreStateType;
  extra: AxiosInstance;
};

export {
  useAppDispatch,
  useAppSelector,
  useActionCreators,
};

export type {
  StoreStateType,
  AppDispatch,
  AsyncActionsArgsType,
};

