import { ComponentStyleType } from '../../../types';

type BookmarkIconProps = {
  isActive?: boolean;
  type?: ComponentStyleType;
  size: {
    width: number;
    height: number;
  };
};
function BookmarkIcon({isActive = false, type = 'place-card', size}: BookmarkIconProps) {
  const className = `${type}__bookmark-button ${isActive ? `${type}__bookmark-button--active` : ''} button`;

  return (
    <button className={className} type="button">
      <svg className={`${type}__bookmark-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkIcon;
