import { ReactElement } from 'react';
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

  const testId = 'header-avatar-image';

  return (
    avatarUrl
      ? <img src={avatarUrl} data-testid={testId} alt="User avatar" className={styleClasses}/>
      : <div className={styleClasses} data-testid={testId}/>
  );
}

export default AvatarImage;
