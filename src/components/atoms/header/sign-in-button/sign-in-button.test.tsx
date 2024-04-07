import { internet } from 'faker';
import { render, screen } from '@testing-library/react';
import SignInButton from './sign-in-button.tsx';
import { withHistory } from '../../../../utils/tests/general.tsx';

describe('SignInButton component', () => {
  it('should render with text "Sign in"', () => {
    const id = 'sign-in-button';
    const buttonText = 'Sign in';

    render(withHistory(<SignInButton link={internet.url()} />));

    const profileData = screen.getByTestId(id);

    expect(profileData).toBeInTheDocument();
    expect(profileData).toHaveTextContent(buttonText);
  });
});
