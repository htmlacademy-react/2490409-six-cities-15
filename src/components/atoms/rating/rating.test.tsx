import { render, screen } from '@testing-library/react';
import Rating from './rating.tsx';

describe('Rating component', () => {
  it('should render stars without number', () => {
    const containerId = 'rating';
    const starsId = 'rating-stars';
    const ratingValue = 3.1;
    const expectedStars = 3;

    render(<Rating rating={ratingValue}/>);

    const rating = screen.getByTestId(containerId);
    const stars = screen.getByTestId(starsId);

    expect(rating).toBeInTheDocument();
    expect(rating).toContainElement(stars);
    expect(stars).toHaveStyle(`width: ${expectedStars * 20}%`);
  });

  it('should render stars with number', () => {
    const containerId = 'rating';
    const starsId = 'rating-stars';
    const ratingValue = 3.5;
    const expectedStars = 4;

    render(<Rating rating={ratingValue} showValue/>);

    const rating = screen.getByTestId(containerId);
    const stars = screen.getByTestId(starsId);

    expect(rating).toBeInTheDocument();
    expect(rating).toContainElement(stars);
    expect(rating).toHaveTextContent(String(ratingValue));
    expect(stars).toHaveStyle(`width: ${expectedStars * 20}%`);
  });
});
