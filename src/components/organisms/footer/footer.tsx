import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { LogoIcon } from '../../atoms';
import { AppRoute } from '../../../constants';

function Footer(): ReactElement {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <LogoIcon size="small"/>
      </Link>
    </footer>
  );
}

export default Footer;
