import { createMemoryHistory, MemoryHistory } from 'history';
import { makeFakeStoreState, withHistory, withStore } from '../../utils/tests';
import App from './app.tsx';
import { APP_ROUTE, AUTH_STATUS, CITIES, REQUEST_STATUS } from '../../constants';
import { render, screen } from '@testing-library/react';
import { setOfferIdInRoute } from '../../store/helpers.ts';
import { sliceName } from '../../store/slices/offers/meta.ts';
import {datatype} from 'faker';

describe('App routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render main page for route APP_ROUTE.Main', () => {
    const mainPageId = 'main-page';
    const expectedText = /places?\sto\sstay\sin/;
    mockHistory.push(APP_ROUTE.Main);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      makeFakeStoreState({
        offersStateProps: {
          offersLen: 1,
          offersRequestStatus: REQUEST_STATUS.Success,
          offersCity: CITIES.Paris,
        },
      }),
    );

    render(app);

    expect(screen.getByTestId(mainPageId)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render login page for route APP_ROUTE.Login', () => {
    const loginPageId = 'login-page';
    mockHistory.push(APP_ROUTE.Login);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      makeFakeStoreState({
        userStateProps: {
          authorizationStatus: AUTH_STATUS.NoAuth,
        },
      }),
    );

    const { container } = render(app);

    const inputs = container.querySelectorAll('input');

    expect(screen.getByTestId(loginPageId)).toBeInTheDocument();
    expect(inputs.length).toBe(2);
  });

  it('should render offer page for route APP_ROUTE.Offer', () => {
    const offerPageId = 'offer-page';
    const store = makeFakeStoreState({
      offersStateProps: {
        offersLen: 1,
        additionalDataIndex: 0,
      },
      userStateProps: {
        authorizationStatus: AUTH_STATUS.NoAuth,
      },
    });
    const offerId = store[sliceName].offers[0].id;

    mockHistory.push(setOfferIdInRoute(APP_ROUTE.Offer, offerId));

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      store,
    );

    render(app);

    expect(screen.getByTestId(offerPageId)).toBeInTheDocument();
  });

  it('should render favorites page for route APP_ROUTE.Favorites', () => {
    const favoritePageId = 'favorites-page';
    const store = makeFakeStoreState({
      offersStateProps: {
        offersLen: 1,
        offersFavoriteStatus: true,
      },
      userStateProps: {
        authorizationStatus: AUTH_STATUS.Auth,
      },
    });

    mockHistory.push(APP_ROUTE.Favorites);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      store,
    );

    render(app);

    expect(screen.getByTestId(favoritePageId)).toBeInTheDocument();
  });

  it('should render not-found page for route APP_ROUTE.NotFound', () => {
    const notFoundPageId = 'not-found-page';
    const store = makeFakeStoreState({});

    mockHistory.push(APP_ROUTE.NotFound);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      store,
    );

    render(app);

    expect(screen.getByTestId(notFoundPageId)).toBeInTheDocument();
  });

  it('should render server-error page for route APP_ROUTE.ServerError', () => {
    const serverErrorPageId = 'server-error-page';
    const store = makeFakeStoreState({});

    mockHistory.push(APP_ROUTE.ServerError);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      store,
    );

    render(app);

    expect(screen.getByTestId(serverErrorPageId)).toBeInTheDocument();
  });

  it('should render not-found page if route wasn\'t found', () => {
    const notFoundPageId = 'not-found-page';
    const store = makeFakeStoreState({});

    mockHistory.push(`${APP_ROUTE.Main}${datatype.string(20)}`);

    const { withStoreComponent: app } = withStore(
      withHistory(
        <App/>,
        mockHistory,
      ),
      store,
    );

    render(app);

    expect(screen.getByTestId(notFoundPageId)).toBeInTheDocument();
  });
});

