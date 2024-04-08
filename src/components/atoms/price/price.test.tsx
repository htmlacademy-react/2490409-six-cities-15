import { render, screen } from '@testing-library/react';
import Price from './price.tsx';

describe('Price component', () => {
  it('should have text with price', () => {
    const id = 'price';
    const expectedPrice = 300;

    render(<Price price={expectedPrice}/>);

    const counter = screen.getByTestId(id);

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(String(expectedPrice));
  });
});
