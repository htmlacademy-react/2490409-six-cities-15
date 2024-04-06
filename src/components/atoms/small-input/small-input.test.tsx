import { render, screen } from '@testing-library/react';
import SmallInput from './small-input.tsx';

describe('Counter component', () => {
  it('renders correctly', () => {
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

  it('renders correctly', () => {
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
