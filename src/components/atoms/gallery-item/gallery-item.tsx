type GalleryItemProps = {
  imageLink: string;
};

function GalleryItem({imageLink}: GalleryItemProps) {
  return (
    <div className="offer__image-wrapper" data-testid="gallery-item">
      <img
        data-testid="gallery-item-image"
        className="offer__image"
        src={imageLink}
        alt="Photo studio"
      />
    </div>
  );
}

export default GalleryItem;
