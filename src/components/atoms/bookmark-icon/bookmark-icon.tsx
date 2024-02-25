type BookmarkIconProps = {
  isFavourite?: boolean;
};
function BookmarkIcon({isFavourite = false}: BookmarkIconProps) {
  const className = `place-card__bookmark-button ${isFavourite ? 'place-card__bookmark-button--active' : ''} button`;

  return (
    <button
      className={className}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkIcon;