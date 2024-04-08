import { internet } from 'faker';
import { render, screen } from '@testing-library/react';
import ProfileData from './profile-data.tsx';
import { withHistory } from '../../../../utils/tests';

describe('ProfileData component', () => {
  it('should have user email and number of favorite offers', () => {
    const id = 'profile-data';
    const emailText = internet.email();
    const expectedCounterValue = 34;

    render(withHistory(<ProfileData email={emailText} favoritesCounter={expectedCounterValue} />));

    const profileData = screen.getByTestId(id);

    expect(profileData).toBeInTheDocument();
    expect(profileData).toHaveTextContent(emailText);
    expect(profileData).toHaveTextContent(String(expectedCounterValue));
  });
});
