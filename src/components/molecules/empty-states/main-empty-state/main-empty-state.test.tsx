import { render, screen } from '@testing-library/react';
import MainEmptyState from './main-empty-state.tsx';
import {CITIES} from '../../../../constants';

describe('FavoritesEmptyState component', () => {
  it('should render with correct city, title and description', () => {
    const title = 'No places to stay available';
    const city = CITIES.Amsterdam;
    const description = `We could not find any property available at the moment in ${city}`;

    render(<MainEmptyState city={city}/>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
