import { render, screen } from '@testing-library/react';
import GalleryItem from './/gallery-item.tsx';
import { image } from 'faker';

describe('GalleryItem component', () => {
  it('should render with tag "img" with attribute "alt", have class "offer__image"', () => {
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
