import { MouseEventHandler, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../../store/slices/user/thunk.ts';
import { getToken } from '../../../../services';
import { useActionCreators, useAppDispatch } from '../../../../store/helpers.ts';
import { offersActions } from '../../../../store/slices/offers';

function SignOutButton(): ReactElement {
  const dispatch = useAppDispatch();
  const { removeAllFavoriteMarks } = useActionCreators(offersActions);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    dispatch(logoutAction(getToken()));
    dispatch(removeAllFavoriteMarks());
  };

  return (
    <li className="header__nav-item" data-testid="sign-out-button">
      <Link className="header__nav-link" to="#" onClick={handleClick}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOutButton;
