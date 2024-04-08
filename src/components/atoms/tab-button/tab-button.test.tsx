import { render, screen } from '@testing-library/react';
import TabButton from './tab-button.tsx';
import { withHistory } from '../../../utils/tests';
import { datatype, internet } from 'faker';

describe('ProfileData component', () => {
  it('should have text from props', () => {
    const id = 'tab-button';
    const linkId = 'tab-button-link';
    const tabText = datatype.string(20);

    render(withHistory(<TabButton tabName={tabText} link={internet.url()} isSelected />));

    const tabButton = screen.getByTestId(id);
    const tabButtonLink = screen.getByTestId(linkId);

    expect(tabButton).toBeInTheDocument();
    expect(tabButton).toHaveTextContent(tabText);
    expect(tabButtonLink).toHaveClass('tabs__item--active');
  });
});
