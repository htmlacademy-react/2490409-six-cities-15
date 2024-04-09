import { Link } from 'react-router-dom';
import { LogoIcon, LogoIconSizeType } from '..';
import { AppRoute } from '../../../constants';
import classNames from 'classnames';

type LogoIconProps = {
  isActive?: boolean;
  size: LogoIconSizeType;
};

function HeaderLogoIcon({ size, isActive = false }: LogoIconProps) {
  const linkClass = classNames(
    {'header__logo-link': !isActive},
    {'header__logo-link--active': isActive},
  );

  return (
    <div className="header__left" data-testid={`header-logo-icon-${size}`}>
      <Link className={linkClass} to={AppRoute.Main}>
        <LogoIcon size={size}/>
      </Link>
    </div>
  );
}

export default HeaderLogoIcon;
