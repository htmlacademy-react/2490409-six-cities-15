import { render, screen } from '@testing-library/react';
import SignOutButton from './sign-out-button.tsx';
import { extractActionsTypes, makeFakeStoreState, withHistory, withStore } from '../../../../utils/tests';
import { API_ROUTE, AUTH_STATUS } from '../../../../constants';
import { userEvent } from '@testing-library/user-event';
import { logoutAction } from '../../../../store/slices/user/thunk.ts';
import { StatusCodes } from 'http-status-codes';

describe('SignOutButton component', () => {
  it('should render with text "Sign out"', () => {
    const id = 'sign-out-button';
    const buttonText = 'Sign out';

    const { withStoreComponent } = withStore(
      withHistory(<SignOutButton/>),
    );

    render(withStoreComponent);

    const profileData = screen.getByTestId(id);

    expect(profileData).toBeInTheDocument();
    expect(profileData).toHaveTextContent(buttonText);
  });

  it('should dispatch logoutAction', async () => {
    const id = 'sign-out-button-link';

    const store = makeFakeStoreState({
      userStateProps: {
        authorizationStatus: AUTH_STATUS.Auth,
      }
    });

    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      withHistory(<SignOutButton/>),
      store,
    );

    mockAxiosAdapter.onDelete(API_ROUTE.Delete.Logout).reply(StatusCodes.NO_CONTENT);

    render(withStoreComponent);

    const button = screen.getByTestId(id);

    await userEvent.click(button);

    const action = extractActionsTypes(mockStore.getActions());

    expect(action).toContain(logoutAction.pending.type);
    expect(action).toContain(logoutAction.fulfilled.type);
  });
});
