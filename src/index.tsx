import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SiteParams = {
  rentOffersCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App rentOfferCount={SiteParams.rentOffersCount} />
  </React.StrictMode>
);
