import { render, screen } from '@testing-library/react';
import PremiumLabel from './premium-label.tsx';

describe('PremiumLabel component', () => {
  it('renders correctly', () => {
    const id = 'premium-label';

    render(<PremiumLabel/>);

    const premiumLabel = screen.getByTestId(id);
    expect(premiumLabel).toBeInTheDocument();
    expect(premiumLabel).toHaveTextContent('Premium');
  });
});
