import { render, screen } from '@testing-library/react';
import LogoIcon from './logo-icon.tsx';

describe('LogoIcon component', () => {
  it('should render with size "medium" and have "img" tag', () => {
    const size = 'medium';
    const logoId = `logo-icon-${size}`;

    render(<LogoIcon size={size}/>);

    const logo = screen.getByTestId(logoId);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe('img');
    expect(logo).toHaveStyle({width: 81, height: 41});
  });
});
