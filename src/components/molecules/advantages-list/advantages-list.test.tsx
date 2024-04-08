import { render, screen } from '@testing-library/react';
import AdvantagesList from './advantages-list.tsx';

describe('AdvantagesList Component', () => {
  it('list renders correct number of items', () => {
    const listId = 'advantages-list';
    const itemId = 'advantages-list-item';
    const advantages = ['TV', 'Wi-Fi'];

    render(<AdvantagesList advantages={advantages}/>);

    const list = screen.getByTestId(listId);
    const items = screen.getAllByTestId(itemId);

    expect(list).toBeInTheDocument();
    items.forEach((item) => {
      expect(list).toContainElement(item);
    });
    expect(items.length).toBe(2);
  });
});

