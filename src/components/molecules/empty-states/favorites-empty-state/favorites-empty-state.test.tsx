import { render, screen } from '@testing-library/react';
import FavoritesEmptyState from './favorites-empty-state.tsx';

describe('FavoritesEmptyState component', () => {
  it('should render with correct title and description', () => {
    const title = 'Nothing yet saved.';
    const description = 'Save properties to narrow down search or plan your future trips.';

    render(<FavoritesEmptyState/>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
