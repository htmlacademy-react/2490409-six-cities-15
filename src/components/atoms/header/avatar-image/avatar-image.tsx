import {ReactElement} from 'react';
import classNames from 'classnames';

type AvatarImageProps = {
  avatarUrl?: string;
}

function AvatarImage({avatarUrl}: AvatarImageProps): ReactElement {
  const styleClasses = classNames(
    'header__avatar-wrapper',
    {'user__avatar': avatarUrl},
    {'user__avatar-wrapper': !avatarUrl},
  );

  return avatarUrl ? <img src={avatarUrl} alt="User avatar" className={styleClasses}/> : <div className={styleClasses}/>;
}

export default AvatarImage;
