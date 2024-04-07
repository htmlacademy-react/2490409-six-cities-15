import { render, screen } from '@testing-library/react';
import HeaderLogoIcon from './header-logo-icon.tsx';
import {withHistory} from '../../../utils/tests/general.tsx';

describe('HeaderLogo component', () => {
  it('should render with size "medium" and contain Logo', () => {
    const size = 'medium';
    const headerLogoId = `header-logo-icon-${size}`;
    const logoId = `logo-icon-${size}`;

    render(withHistory(<HeaderLogoIcon size="medium"/>));

    const headerLogo = screen.getByTestId(headerLogoId);
    const logo = screen.getByTestId(logoId);
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toContainElement(logo);
    expect(headerLogo).toHaveStyle({width: 81, height: 41});
  });
});
