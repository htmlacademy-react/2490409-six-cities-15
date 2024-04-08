import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SmallInput from './small-input.tsx';

describe('SmallInput component', () => {
  it('should have tag input, be required and have type "password"', () => {
    const id = 'small-input';

    const { container } = render(<SmallInput label="password" name="password" placeholder="Password" type="password" isRequired/>);

    const inputContainer = screen.getByTestId(id);
    const input = container.querySelector('input');

    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toContainElement(input);
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should have tag input, be required and have type "email"', () => {
    const id = 'small-input';

    const { container } = render(<SmallInput label="email" name="email" placeholder="Email" type="email" isRequired/>);

    const inputContainer = screen.getByTestId(id);
    const input = container.querySelector('input');

    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toContainElement(input);
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('should have tag input, be required and have type "email"', async () => {
    const expectedTextValue = 'email@email.com';
    const { container } = render(<SmallInput label="email" name="email" placeholder="Email" type="email" isRequired/>);

    const input = container.querySelector('input');

    if (input) {
      await userEvent.type(input, expectedTextValue);
    }

    expect(screen.getByDisplayValue(expectedTextValue)).toBeInTheDocument();
  });
});
