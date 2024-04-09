import { render, screen } from '@testing-library/react';
import SortSelectorItem from './sort-selector-item.tsx';
import { SortTypesType } from '../../../types';

describe('SortSelectorItem component', () => {
  it('should be in document, have content from props, to be tag "li", to have class "places__option--active" if is selected', () => {
    const id = 'sort-selector-item';
    const content: SortTypesType = 'Price: high to low';

    render(<SortSelectorItem value={content} onClick={() => {}} isSelected/>);

    const selectorItem = screen.getByTestId(id);

    expect(selectorItem).toBeInTheDocument();
    expect(selectorItem).toHaveTextContent(content);
    expect(selectorItem.tagName.toLowerCase()).toBe('li');
    expect(selectorItem).toHaveClass('places__option--active');
  });
});
