import { Action } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { HistoryRouter } from '../../routing';

const extractActionsTypes = (actions: Array<Action<string>>): string[] => actions.map(({ type }) => type);

const withHistory = (component: ReactElement, history?: MemoryHistory): ReactElement => {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
};

export {
  extractActionsTypes,
  withHistory,
};
