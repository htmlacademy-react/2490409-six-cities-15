import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AvatarImage } from '..';

function SignInButton({link}: {link: string}): ReactElement {
  return (
    <li className="header__nav-item user" data-testid="sign-in-button">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={link}
      >
        <AvatarImage/>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

export default SignInButton;
