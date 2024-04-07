import { render, screen } from '@testing-library/react';
import SignOutButton from './sign-out-button.tsx';
import { withHistory } from '../../../../utils/tests';

describe('SignOutButton component', () => {
  it('should render with text "Sign out"', () => {
    const id = 'sign-out-button';
    const buttonText = 'Sign out';

    render(withHistory(<SignOutButton/>));

    const profileData = screen.getByTestId(id);

    expect(profileData).toBeInTheDocument();
    expect(profileData).toHaveTextContent(buttonText);
  });
});
