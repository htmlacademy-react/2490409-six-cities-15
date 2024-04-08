import { render, screen } from '@testing-library/react';
import Email from './email.tsx';
import { internet } from 'faker';

describe('Email component', () => {
  it('should render with email from props', () => {
    const id = 'header-email';
    const emailText = internet.email();

    render(<Email email={emailText} />);

    const email = screen.getByTestId(id);

    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent(emailText);
  });
});
