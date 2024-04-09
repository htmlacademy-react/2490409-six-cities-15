import { Action } from '@reduxjs/toolkit';
import { FC, ReactElement } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { HistoryRouter } from '../../routing';
import { AppThunkDispatch, StoreStateType } from '../../store/helpers.ts';
import { createAPI } from '../../services';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { helpers } from 'faker';
import { AppRoute } from '../../constants';
import { AppRouteType } from '../../types';
import {sliceName as offersSliceName} from '../../store/slices/offers/meta.ts';
import {sliceName as userSliceName} from '../../store/slices/user/meta.ts';
import {FakeUserStateProps, makeFakeUserState} from './user.ts';
import {FakeOffersStateProps, makeFakeOffersState} from './offers.ts';

const extractActionsTypes = (actions: Array<Action<string>>): string[] => actions.map(({ type }) => type);

function withHistory(component: ReactElement, history?: MemoryHistory): ReactElement {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: ReactElement;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

function withStore(
  component: ReactElement,
  initialState: Partial<StoreStateType> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<StoreStateType, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });

}

const makeRandomAppRoute = (exclude?: AppRouteType[]) => {
  const availableRoutes = Object.values(AppRoute);
  if (!exclude) {
    return helpers.randomize(availableRoutes);
  }

  exclude.forEach((route) => {
    const i = availableRoutes.indexOf(route);
    if (i) {
      availableRoutes.splice(i, 1);
    }
  });

  return helpers.randomize(availableRoutes);
};

function getStoreWrapper(initialState: Partial<StoreStateType>): FC {
  const store = configureMockStore<
    StoreStateType, Action<string>, AppThunkDispatch
  >()(initialState);

  return function withProvider({children}: { children?: ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  };
}

type FakeStoreStateProps = {
  offersStateProps?: FakeOffersStateProps;
  userStateProps?: FakeUserStateProps;
};

const makeFakeStoreState = ({offersStateProps, userStateProps}: FakeStoreStateProps) => ({
  [offersSliceName]: makeFakeOffersState(offersStateProps || {}),
  [userSliceName]: makeFakeUserState(userStateProps || {}),
});

export {
  extractActionsTypes,
  withHistory,
  withStore,
  makeRandomAppRoute,
  makeFakeStoreState,
  getStoreWrapper,
};
