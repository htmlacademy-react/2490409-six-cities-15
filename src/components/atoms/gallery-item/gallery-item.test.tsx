import { render, screen } from '@testing-library/react';
import GalleryItem from './/gallery-item.tsx';
import { image } from 'faker';

describe('Component: AdvantagesListItem', () => {
  it('should render correctly', () => {
    const containerId = 'gallery-item';
    const imgId = 'gallery-item-image';
    const link = image.image();

    render(<GalleryItem imageLink={link}/>);

    const container = screen.getByTestId(containerId);
    const img = screen.getByTestId(imgId);
    expect(container).toBeInTheDocument();
    expect(container).toContainElement(img);
    expect(img).toHaveClass('offer__image');
    expect(img).toHaveAttribute('alt', 'Photo studio');
  });
});
