import { render, screen } from '@testing-library/react';
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
});
