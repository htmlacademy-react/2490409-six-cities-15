import { MouseEventHandler, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../../../store';
import { logoutAction } from '../../../../store/slices/user/thunk.ts';
import { getToken } from '../../../../services';

function SignOutButton(): ReactElement {
  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    store.dispatch(logoutAction(getToken()));
  };

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#" onClick={handleOnClick}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOutButton;
