import LogoIcon from '../../atoms/logo-icon/logo-icon.tsx';
import {Link} from 'react-router-dom';
import {ReactElement} from 'react';

type ProfileDataProp = {
  link: string;
  email: string;
  favoritesCounter: number;
};
const Counter = ({count}: {count: number}): ReactElement => (
  <span className="header__favorite-count">{count}</span>
);

const AvatarImage = (): ReactElement => (
  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
);

const SignInButton = ({link}: {link: string}): ReactElement => (
  <li className="header__nav-item user">
    <Link
      className="header__nav-link header__nav-link--profile"
      to={link}
    >
      <AvatarImage />
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);

const SignOutButton = ({link}: {link: string}): ReactElement => (
  <li className="header__nav-item">
    <Link className="header__nav-link" to={link}>
      <span className="header__signout">Sign out</span>
    </Link>
  </li>
);

const Email = ({email}: {email: string}): ReactElement => (
  <span className="header__user-name user__name">
    {email}
  </span>
);

const ProfileData = (props: ProfileDataProp): ReactElement => (
  <li className="header__nav-item user">
    <Link
      className="header__nav-link header__nav-link--profile"
      to={props.link}
    >
      <AvatarImage/>
      <Email email={props.email}/>
      <Counter count={props.favoritesCounter}/>
    </Link>
  </li>
);

function Header() {
  const isAuthorised = false;
  //todo: get info from Redux (?)
  const profileData: ProfileDataProp = {
    link: '#',
    email: 'Oliver.conner@gmail.com',
    favoritesCounter: 3,
  };

  const navListData: ReactElement = isAuthorised ? (
    <>
      <ProfileData
        link={profileData.link}
        email={profileData.email}
        favoritesCounter={profileData.favoritesCounter}
      />
      <SignOutButton link={'#'} />
    </>
  ) : (
    <SignInButton link={'#'} />
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <LogoIcon/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navListData}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
