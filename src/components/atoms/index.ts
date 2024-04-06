import BookmarkIcon from './bookmark-icon/bookmark-icon.tsx';
import BOOKMARK_ICON_SIZE from './bookmark-icon/bookmark-icon-size.ts';
import { BookmarkIconSizeType } from './bookmark-icon/bookmark-icon-size.ts';
import AdvantageListItem from './advantages-list-item/advantages-list-item.tsx';
import HeaderLogoIcon from './header-logo-icon/header-logo-icon.tsx';
import PremiumLabel from './premium-label/premium-label.tsx';
import SmallInput from './small-input/small-input.tsx';
import SortSelectorItem from './sort-selector-item/sort-selector-item.tsx';
import TabButton from './tab-button/tab-button.tsx';
import LogoIcon from './logo-icon/logo-icon.tsx';
import Rating from './rating/rating.tsx';
import GalleryItem from './gallery-item/gallery-item.tsx';
import Price from './price/price.tsx';
import OfferFeatureItem from './offer-feature-item/offer-feature-item.tsx';
import LOGO_ICON_SIZE from './logo-icon/logo-icon-size.ts';
import { LogoIconSizeType } from './logo-icon/logo-icon-size.ts';
import { memo } from 'react';

const MemorizedLogoIcon = memo(LogoIcon);
const MemorizedHeaderLogoIcon = memo(HeaderLogoIcon);
const MemorizedBookmarkIcon = memo(BookmarkIcon);
const MemorizedAdvantageListItem = memo(AdvantageListItem);
const MemorizedPremiumLabel = memo(PremiumLabel);
const MemorizedSmallInput = memo(SmallInput);
const MemorizedTabButton = memo(TabButton);
const MemorizedRating = memo(Rating);
const MemorizedGalleryItem = memo(GalleryItem);
const MemorizedPrice = memo(Price);
const MemorizedOfferFeatureItem = memo(OfferFeatureItem);

export {
  MemorizedBookmarkIcon as BookmarkIcon,
  BOOKMARK_ICON_SIZE,
  MemorizedAdvantageListItem as AdvantageListItem,
  MemorizedHeaderLogoIcon as HeaderLogoIcon,
  MemorizedPremiumLabel as PremiumLabel,
  MemorizedSmallInput as SmallInput,
  SortSelectorItem,
  MemorizedTabButton as TabButton,
  MemorizedLogoIcon as LogoIcon,
  MemorizedRating as Rating,
  MemorizedGalleryItem as GalleryItem,
  MemorizedPrice as Price,
  MemorizedOfferFeatureItem as OfferFeatureItem,
  LOGO_ICON_SIZE,
};

export type {
  LogoIconSizeType,
  BookmarkIconSizeType,
};

