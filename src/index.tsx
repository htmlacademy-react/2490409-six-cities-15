import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchOffersAction } from './store/slices/offers/thunk.ts';
import { fetchUserByTokenAction } from './store/slices/user/thunk.ts';
import { getToken } from './services';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(fetchUserByTokenAction(getToken()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
