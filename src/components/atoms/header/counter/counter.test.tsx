import { render, screen } from '@testing-library/react';
import Counter from './counter.tsx';

describe('Counter component', () => {
  it('renders correctly', () => {
    const counterId = 'header-counter';
    const expectedCount = 3;

    render(<Counter count={expectedCount}/>);

    const counter = screen.getByTestId(counterId);

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(String(expectedCount));
  });
});
