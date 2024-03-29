import { IconsAndLabelsStyleClassType } from '../../../types';
import classNames from 'classnames';

type BookmarkIconProps = {
  isActive?: boolean;
  type?: IconsAndLabelsStyleClassType;
  size: {
    width: number;
    height: number;
  };
};
function BookmarkIcon({isActive = false, type = 'place-card', size}: BookmarkIconProps) {
  const className = classNames(
    'button',
    `${type}__bookmark-button`,
    {[`${type}__bookmark-button--active`]: isActive},
  );

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
