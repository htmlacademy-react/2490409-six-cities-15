import { HeaderLogoIcon } from '../../atoms';
import { ReactElement } from 'react';
import { useAuthStatus, useFavoriteOffers } from '../../../hooks';
import { AppRoute, AuthStatus } from '../../../constants';
import { ProfileData, SignInButton, SignOutButton } from '../../atoms/header';
import { useAppSelector } from '../../../store/helpers.ts';
import { userSelectors } from '../../../store/slices/user';

type HeaderProps = {
  isLogoActive?: boolean;
};

function Header({ isLogoActive = false }: HeaderProps) {
  const profileData = useAppSelector(userSelectors.user);
  const favoritesCounter = useFavoriteOffers().length;

  const navListData: ReactElement = useAuthStatus() === AuthStatus.Auth ? (
    <>
      {
        profileData &&
        <ProfileData
          avatarUrl={profileData.avatarUrl}
          email={profileData.email}
          favoritesCounter={favoritesCounter}
        />
      }
      <SignOutButton />
    </>
  ) : (
    <SignInButton link={AppRoute.Login} />
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogoIcon isActive={isLogoActive} size="medium"/>
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
