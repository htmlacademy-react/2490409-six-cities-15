import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AvatarImage, Counter, Email } from '..';
import { APP_ROUTE } from '../../../../constants';

type ProfileDataProps = {
  email: string;
  favoritesCounter: number;
  avatarUrl?: string;
};

function ProfileData(props: ProfileDataProps): ReactElement {
  return (
    <li className="header__nav-item user" data-testid="profile-data">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={APP_ROUTE.Favorites}
      >
        <AvatarImage avatarUrl={props.avatarUrl}/>
        <Email email={props.email}/>
        <Counter count={props.favoritesCounter}/>
      </Link>
    </li>
  );
}

export default ProfileData;
