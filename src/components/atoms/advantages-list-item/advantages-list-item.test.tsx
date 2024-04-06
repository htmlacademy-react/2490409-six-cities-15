import { render, screen } from '@testing-library/react';
import AdvantagesListItem from './advantages-list-item.tsx';

describe('Component: AdvantagesListItem', () => {
  it('should render correctly', () => {
    const text = 'TV';

    render(<AdvantagesListItem name={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
