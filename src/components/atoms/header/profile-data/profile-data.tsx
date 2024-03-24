import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { AvatarImage, Counter, Email } from '..';
import {APP_ROUTE} from '../../../../constants';

type ProfileDataProps = {
  email: string;
  favoritesCounter: number;
};

function ProfileData(props: ProfileDataProps): ReactElement {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={APP_ROUTE.Favorites}
      >
        <AvatarImage/>
        <Email email={props.email}/>
        <Counter count={props.favoritesCounter}/>
      </Link>
    </li>
  );
}

export default ProfileData;
