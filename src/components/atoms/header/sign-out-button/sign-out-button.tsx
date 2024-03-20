import { MouseEventHandler, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../../store/slices/user/thunk.ts';
import { getToken } from '../../../../services';
import { useAppDispatch } from '../../../../store/helpers.ts';

function SignOutButton(): ReactElement {
  const dispatch = useAppDispatch();
  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    dispatch(logoutAction(getToken()));
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
