import {HostUserType} from '../../../mocks';
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
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={avatarWrapperClass}>
          <img
            className="offer__avatar user__avatar"
            src={user.avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{user.name}</span>
        {user.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}

export default Host;
