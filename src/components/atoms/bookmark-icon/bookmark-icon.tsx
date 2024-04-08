import { IconsAndLabelsStyleClassType, OfferData } from '../../../types';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { changeFavoriteStatusAction } from '../../../store/slices/offers/thunk.ts';
import { useAppDispatch } from '../../../store/helpers.ts';
import { useAuthStatus } from '../../../hooks';
import { APP_ROUTE, AUTH_STATUS } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { BOOKMARK_ICON_SIZE, BookmarkIconSizeType } from '../index.ts';

type BookmarkIconProps = {
  id: OfferData['id'];
  isActive?: boolean;
  type?: IconsAndLabelsStyleClassType;
  size: BookmarkIconSizeType;
};
function BookmarkIcon({id, isActive = false, type = 'place-card', size}: BookmarkIconProps) {
  const dispatch = useAppDispatch();
  const authStatus = useAuthStatus();
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (authStatus !== AUTH_STATUS.Auth) {
      navigate(APP_ROUTE.Login);

      return;
    }

    dispatch(
      changeFavoriteStatusAction(
        { id , status: !isActive }
      ),
    );
  };

  const className = classNames(
    'button',
    `${type}__bookmark-button`,
    {[`${type}__bookmark-button--active`]: isActive},
  );

  const [width, height] = BOOKMARK_ICON_SIZE[size];

  return (
    <button className={className} type="button" onClick={handleClick} data-testid="bookmark-icon">
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkIcon;
