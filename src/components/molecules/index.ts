import CityTabs from './city-tabs/city-tabs.tsx';
import GoodsList from './goods-list/goods-list.tsx';
import LoginForm from './login-form/login-form.tsx';
import OfferCard from './offer-card/offer-card.tsx';
import SortSelector from './sort-selector/sort-selector.tsx';
import OffersListWithSort from './offers-list-with-sort/offers-list-with-sort.tsx';
import OffersListWithCitiesSections from './offers-list-with-cities-sections/offers-list-with-cities-sections.tsx';
import FavoritesEmptyState from './empty-states/favorites-empty-state/favorites-empty-state.tsx';
import MainEmptyState from './empty-states/main-empty-state/main-empty-state.tsx';
import Gallery from './gallery/gallery.tsx';
import OfferFeatures from './offer-features/offer-features.tsx';
import Host from './host/host.tsx';
import ReviewsSection from './reviews-section/reviews-section.tsx';
import ReviewsList from './reviews-list/reviews-list.tsx';
import ReviewComment from './review-comment/review-comment.tsx';
import ReviewForm from './review-form/review-form.tsx';
import RatingButton from './rating-button/rating-button.tsx';
import StarInput from './star-input/star-input.tsx';
import Map from './map/map.tsx';
import OffersByLocationSection from './offers-by-location-section/offers-by-location-section.tsx';
import OffersList from './offers-list/offers-list.tsx';
import Loader from './loader/loader.tsx';
import { memo } from 'react';

const MemorizedGoodsList = memo(GoodsList);
const MemorizedOfferCard = memo(OfferCard);
const MemorizedSortSelector = memo(SortSelector);
const MemorizedGallery = memo(Gallery);
const MemorizedOfferFeatures = memo(OfferFeatures);
const MemorizedHost = memo(Host);
const MemorizedReviewsList = memo(ReviewsList);
const MemorizedOffersByLocationSection = memo(
  OffersByLocationSection,
  (prevProps, nextProps) => {
    if (prevProps.offers.length !== nextProps.offers.length) {
      return false;
    }

    for (let i = 0; i < prevProps.offers.length; i++) {
      if (prevProps.offers[i].id !== nextProps.offers[i].id) {
        return false;
      }
    }

    return true;
  }
);
const MemorizedOffersList = memo(OffersList);
const MemorizedOffersListWithSort = memo(OffersListWithSort);
const MemorizedMap = memo(Map);

export {
  CityTabs,
  MemorizedGoodsList as GoodsList,
  LoginForm,
  MemorizedOfferCard as OfferCard,
  MemorizedSortSelector as SortSelector,
  MemorizedOffersListWithSort as OffersListWithSort,
  OffersListWithCitiesSections,
  FavoritesEmptyState,
  MainEmptyState,
  MemorizedGallery as Gallery,
  MemorizedOfferFeatures as OfferFeatures,
  MemorizedHost as Host,
  ReviewsSection,
  MemorizedReviewsList as ReviewsList,
  ReviewComment,
  ReviewForm,
  RatingButton,
  StarInput,
  MemorizedMap as Map,
  MemorizedOffersByLocationSection as OffersByLocationSection,
  MemorizedOffersList as OffersList,
  Loader,
};
