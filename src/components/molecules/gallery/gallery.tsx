import { GalleryItem } from '../../atoms';

type GalleryProps = {
  images: string[];
};

function Gallery({images}: GalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        { images.map((image) => <GalleryItem key={image} imageLink={image} />) }
      </div>
    </div>
  );
}

export default Gallery;
