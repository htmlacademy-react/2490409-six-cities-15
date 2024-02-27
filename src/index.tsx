import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { offers } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SiteParams = {
  rentOffersCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App rentOfferCount={SiteParams.rentOffersCount} offers={offers} />
  </React.StrictMode>
);
