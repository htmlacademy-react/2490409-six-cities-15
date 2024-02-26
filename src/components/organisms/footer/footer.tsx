import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import { LogoIcon } from '../../atoms';

function Footer(): ReactElement {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to="main.html">
        <LogoIcon/>
      </Link>
    </footer>
  );
}

export default Footer;
