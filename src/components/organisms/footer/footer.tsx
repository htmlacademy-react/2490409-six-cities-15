import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { LogoIcon } from '../../atoms';
import { APP_ROUTE } from '../../../constants';

function Footer(): ReactElement {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={APP_ROUTE.Main}>
        <LogoIcon/>
      </Link>
    </footer>
  );
}

export default Footer;
