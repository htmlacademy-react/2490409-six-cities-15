import { Action } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { HistoryRouter } from '../../routing';
import { AppThunkDispatch, StoreStateType } from '../../store/helpers.ts';
import { createAPI} from '../../services';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import { Provider} from 'react-redux';

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

export {
  extractActionsTypes,
  withHistory,
  withStore,
};
