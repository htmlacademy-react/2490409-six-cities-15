import { render, screen } from '@testing-library/react';
import Price from './price.tsx';

describe('Counter component', () => {
  it('renders correctly', () => {
    const id = 'price';
    const expectedPrice = 300;

    render(<Price price={expectedPrice}/>);

    const counter = screen.getByTestId(id);

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(String(expectedPrice));
  });
});
