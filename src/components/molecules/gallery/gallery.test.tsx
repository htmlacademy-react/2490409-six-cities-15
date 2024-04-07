import { render, screen } from '@testing-library/react';
import Gallery from './gallery.tsx';
import {image} from 'faker';

describe('Gallery component', () => {
  it('should contain images and limit theirs number to 6', () => {
    const galleryId = 'gallery';
    const galleryItemId = 'gallery-item';
    const expectedImagesLimit = 6;
    const imagesNumber = 7;
    const images = Array(imagesNumber).fill('').map(() => image.image());

    render(<Gallery images={images}/>);

    const list = screen.getByTestId(galleryId);
    const imagesElements = screen.getAllByTestId(galleryItemId);

    expect(list).toBeInTheDocument();
    imagesElements.forEach((item) => {
      expect(list).toContainElement(item);
    });
    expect(imagesElements.length).toBeLessThanOrEqual(expectedImagesLimit);
  });
});

