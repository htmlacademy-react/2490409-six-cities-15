import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function SignOutButton({link}: {link: string}): ReactElement {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={link}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOutButton;
