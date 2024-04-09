import { render, screen } from '@testing-library/react';
import BookmarkIcon from './bookmark-icon.tsx';
import { extractActionsTypes, makeFakeStoreState, withHistory, withStore } from '../../../utils/tests';
import { userEvent } from '@testing-library/user-event';
import { sliceName as offersSliceName } from '../../../store/slices/offers/meta.ts';
import { ApiRoute, AppRoute, AuthStatus } from '../../../constants';
import { setFavoriteStatusInRoute, setOfferIdInRoute } from '../../../store/helpers.ts';
import { changeFavoriteStatusAction } from '../../../store/slices/offers/thunk.ts';
import { StatusCodes } from 'http-status-codes';
import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('BookmarkIcon component', () => {
  it('should dispatch changeFavoriteStatusAction on click', async () => {
    const bookmarkId = 'bookmark-icon';
    const isFavorite = false;
    const storeState = makeFakeStoreState({
      offersStateProps: {
        offersLen: 1,
        offersFavoriteStatus: isFavorite,
      },
      userStateProps: {
        shouldCreateUser: false,
        authorizationStatus: AuthStatus.Auth,
      },
    });
    const offerId = storeState[offersSliceName].offers[0].id;

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(<BookmarkIcon id={offerId} isActive={isFavorite} type="offer" size="medium"/>),
      storeState,
    );

    mockAxiosAdapter
      .onPost(
        setFavoriteStatusInRoute(
          setOfferIdInRoute(ApiRoute.Post.SetFavorite, offerId),
          !isFavorite
        ),
      )
      .reply(StatusCodes.OK);

    render(withStoreComponent);

    const bookmark = screen.getByTestId(bookmarkId);

    await userEvent.click(bookmark);

    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      changeFavoriteStatusAction.pending.type,
      changeFavoriteStatusAction.fulfilled.type,
    ]);
  });

  it('should redirect to LoginPage if user is not authorized', async () => {
    const mockHistory = createMemoryHistory();
    mockHistory.push(AppRoute.Offer);

    const bookmarkId = 'bookmark-icon';
    const isFavorite = false;
    const storeState = makeFakeStoreState({
      offersStateProps: {
        offersLen: 1,
        offersFavoriteStatus: isFavorite,
      },
      userStateProps: {
        shouldCreateUser: false,
        authorizationStatus: AuthStatus.NoAuth,
      },
    });
    const offerId = storeState[offersSliceName].offers[0].id;
    const bookmarkIconComponent = <BookmarkIcon id={offerId} isActive={isFavorite} type="offer" size="medium"/>;
    const loginPageComponent = 'LoginPage';

    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route
            path={AppRoute.Login}
            element={loginPageComponent}
          />
          <Route
            path={AppRoute.Offer}
            element={bookmarkIconComponent}
          />
        </Routes>,
        mockHistory,
      ),
      storeState,
    );

    render(withStoreComponent);

    const bookmark = screen.getByTestId(bookmarkId);

    await userEvent.click(bookmark);

    expect(screen.getByText(loginPageComponent)).toBeInTheDocument();
  });
});
