import { Link } from 'react-router-dom';
import { LogoIcon } from '..';

type LogoIconProps = {
  isActive?: boolean;
};

function HeaderLogoIcon({ isActive = false }: LogoIconProps) {
  const linkClass = `header__logo-link${isActive ? '--active' : ''}`;

  return (
    <div className="header__left">
      <Link className={linkClass} to="main.html">
        <LogoIcon/>
      </Link>
    </div>
  );
}

export default HeaderLogoIcon;
