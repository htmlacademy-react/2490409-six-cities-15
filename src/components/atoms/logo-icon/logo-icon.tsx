import { Link } from 'react-router-dom';

type LogoIconProps = {
  isActive?: boolean;
};

function LogoIcon({ isActive = false }: LogoIconProps) {
  const linkClass = `header__logo-link${isActive ? '--active' : ''}`;

  return (
    <div className="header__left">
      <Link className={linkClass} to="main.html">
        <img
          className="header__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}

export default LogoIcon;
