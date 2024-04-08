import { render, screen } from '@testing-library/react';
import BookmarkIcon from './bookmark-icon.tsx';
import {extractActionsTypes, withHistory, withStore} from '../../../utils/tests';
import { userEvent } from '@testing-library/user-event';
import { makeFakeOffersState, makeFakeUserState } from '../../../utils/tests';
import { sliceName as offersSliceName } from '../../../store/slices/offers/meta.ts';
import { sliceName as userSliceName } from '../../../store/slices/user/meta.ts';
import { API_ROUTE, AUTH_STATUS } from '../../../constants';
import { setFavoriteStatusInRoute, setOfferIdInRoute } from '../../../store/helpers.ts';
import { changeFavoriteStatusAction } from '../../../store/slices/offers/thunk.ts';
import { StatusCodes } from 'http-status-codes';

describe('BookmarkIcon component', () => {
  it('should render with text of advantage', async () => {
    const bookmarkId = 'bookmark-icon';
    const offersState = makeFakeOffersState({
      offersLen: 1,
      offersFavoriteStatus: false,
    });
    const userState = makeFakeUserState({
      shouldCreateUser: true,
      authorizationStatus: AUTH_STATUS.Auth
    });
    const offerId = offersState.offers[0].id;
    const isFavorite = offersState.offers[0].isFavorite;

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(<BookmarkIcon id={offerId} isActive={isFavorite} type="offer" size="medium"/>),
      {
        [offersSliceName]: offersState,
        [userSliceName]: userState,
      },
    );

    mockAxiosAdapter
      .onPost(
        setFavoriteStatusInRoute(
          setOfferIdInRoute(API_ROUTE.Post.SetFavorite, offerId),
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
});
