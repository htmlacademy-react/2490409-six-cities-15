import { HostUserType } from '../../../types';
import classNames from 'classnames';

type HostProps = {
  user: HostUserType;
  description: string;
};

function Host({user, description}: HostProps) {
  const avatarWrapperClass = classNames(
    'offer__avatar-wrapper',
    'user__avatar-wrapper',
    {'offer__avatar-wrapper--pro': user.isPro}
  );

  return (
    <div className="offer__host" data-testid="host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={avatarWrapperClass}>
          <img
            className="offer__avatar user__avatar"
            src={user.avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
            data-testid="host-avatar"
          />
        </div>
        <span className="offer__user-name" data-testid="host-user-name">{user.name}</span>
        {user.isPro && <span className="offer__user-status" data-testid="host-is-pro">Pro</span>}
      </div>
      <div className="offer__description" data-testid="host-description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}

export default Host;
