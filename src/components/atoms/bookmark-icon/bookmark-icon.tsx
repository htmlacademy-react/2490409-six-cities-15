import { IconsAndLabelsStyleClassType, OfferData } from '../../../types';
import classNames from 'classnames';
import { MouseEventHandler, useCallback } from 'react';
import { changeFavoriteStatusAction } from '../../../store/slices/offers/thunk.ts';
import { useAppDispatch } from '../../../store/helpers.ts';
import { useAuthStatus } from '../../../hooks';
import { APP_ROUTE, AUTH_STATUS } from '../../../constants';
import { useNavigate } from 'react-router-dom';

type BookmarkIconProps = {
  id: OfferData['id'];
  isActive?: boolean;
  type?: IconsAndLabelsStyleClassType;
  size: {
    width: number;
    height: number;
  };
};
function BookmarkIcon({id, isActive = false, type = 'place-card', size}: BookmarkIconProps) {
  const dispatch = useAppDispatch();
  const authStatus = useAuthStatus();
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const className = classNames(
    'button',
    `${type}__bookmark-button`,
    {[`${type}__bookmark-button--active`]: isActive},
  );

  return (
    <button className={className} type="button" onClick={handleClick}>
      <svg className={`${type}__bookmark-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkIcon;
