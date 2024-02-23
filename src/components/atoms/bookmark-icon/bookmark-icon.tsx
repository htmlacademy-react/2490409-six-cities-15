type BookmarkIconProps = {
  isFavourite?: boolean;
};

const getBookmarkIconClass = (isFavourite: boolean): string => (
  `place-card__bookmark-button ${isFavourite ? 'place-card__bookmark-button--active' : ''} button`
);

function BookmarkIcon({isFavourite = false}: BookmarkIconProps) {
  return (
    <button
      className={getBookmarkIconClass(isFavourite)}
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
