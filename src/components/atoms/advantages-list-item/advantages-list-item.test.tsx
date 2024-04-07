import { render, screen } from '@testing-library/react';
import AdvantagesListItem from './advantages-list-item.tsx';

describe('AdvantagesListItem component', () => {
  it('should render with text of advantage', () => {
    const text = 'TV';

    render(<AdvantagesListItem name={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
