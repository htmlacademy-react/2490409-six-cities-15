import { Link } from 'react-router-dom';
import { LogoIcon } from '..';
import {APP_ROUTE} from '../../../constants';
import classNames from 'classnames';

type LogoIconProps = {
  isActive?: boolean;
  size: {
    width: number;
    height: number;
  };
};

function HeaderLogoIcon({ size, isActive = false }: LogoIconProps) {
  const linkClass = classNames(
    {'header__logo-link': !isActive},
    {'header__logo-link--active': isActive},
  );

  return (
    <div className="header__left">
      <Link className={linkClass} to={APP_ROUTE.Main}>
        <LogoIcon size={size}/>
      </Link>
    </div>
  );
}

export default HeaderLogoIcon;
