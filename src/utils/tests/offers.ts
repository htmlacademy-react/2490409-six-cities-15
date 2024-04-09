import { datatype, helpers, image, name, lorem, date } from 'faker';
import {
  AdditionalDataType, CitiesType, CommentData,
  HostUserType,
  HousingType,
  LocationType,
  OfferData, OfferDetailData,
  RequestStatusType,
} from '../../types';
import { Cities, Housing, RequestStatus } from '../../constants';
import { OffersStateType } from '../../store/slices/offers';

const makeFakeOfferId = (): OfferData['id'] => datatype.uuid();

const makeFakeLocation = (): LocationType => ({
  latitude: datatype.number({ min: 0, max: 180, precision: 0.01 }),
  longitude: datatype.number({ min: 0, max: 180, precision: 0.01 }),
  zoom: datatype.number({ min: 0, max: 180, precision: 0.01 }),
});

const makeFakeOffer = (id: OfferData['id'], isFavorite?: boolean, city?: CitiesType): OfferData => ({
  id,
  title: datatype.string(30),
  type: helpers.randomize(Object.keys(Housing) as HousingType[]),
  price: datatype.number(1000),
  previewImage: image.image(),
  city: {
    name: city ?? helpers.randomize(Object.values(Cities)),
    location: makeFakeLocation(),
  },
  location: makeFakeLocation(),
  isFavorite: isFavorite !== undefined ? isFavorite : datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5 }),
});

const makeFakeHostUser = (isPro?: boolean): HostUserType => ({
  name: name.title(),
  avatarUrl: image.image(),
  isPro: isPro ?? datatype.boolean(),
});

const makeFakeOfferAdditionalData = (id: OfferData['id']): AdditionalDataType => ({
  id,
  description: lorem.words(30),
  images: Array(10).fill('').map(() => image.image()),
  goods: Array(10).fill('').map(() => datatype.string(10)),
  host: makeFakeHostUser(),
  bedrooms: datatype.number({min: 1, max: 3}),
  maxAdults: datatype.number({min: 1, max: 6}),
});

const makeFakeReview = (id: OfferDetailData['id']): CommentData => ({
  id,
  comment: lorem.words(15),
  date: date.past(2).toLocaleDateString('en', { month: 'long', year: 'numeric' }),
  rating: datatype.number({ min: 1, max: 5 }),
  user: makeFakeHostUser(),
});

type FakeOffersStateProps = {
  offersLen?: number;
  additionalDataIndex?: number;
  detailOfferReviewsLen?: number;
  offersFavoriteStatus?: boolean;
  offersCity?: CitiesType;
  nearbyIndexes?: number[];
  offersRequestStatus?: RequestStatusType;
  reviewRequestStatus?: RequestStatusType;
  activeOfferIdIndex?: number;
};

const makeFakeOffersState = (
  {
    offersLen = 0,
    additionalDataIndex,
    detailOfferReviewsLen,
    offersFavoriteStatus,
    offersCity,
    nearbyIndexes,
    offersRequestStatus = RequestStatus.Idle,
    reviewRequestStatus = RequestStatus.Idle,
    activeOfferIdIndex
  }: FakeOffersStateProps
): OffersStateType => {
  const offersIds = Array(offersLen).fill('').map(() => datatype.uuid());
  const offers = offersIds.map((id) => makeFakeOffer(id, offersFavoriteStatus, offersCity));
  const additionalOfferDataId = offersLen > 0 && additionalDataIndex !== undefined ? offers[additionalDataIndex].id : null;

  return {
    offers,
    additionalOfferData: additionalOfferDataId ? makeFakeOfferAdditionalData(additionalOfferDataId) : null,
    detailOfferReviews: detailOfferReviewsLen !== undefined && additionalOfferDataId !== null
      ? Array(detailOfferReviewsLen).fill('').map(() => makeFakeReview(additionalOfferDataId))
      : null,
    nearbyOffersIds: nearbyIndexes ? nearbyIndexes.map((i) => offers[i].id) : [],
    offersRequestStatus,
    reviewRequestStatus,
    activeOfferId: activeOfferIdIndex ? offers[activeOfferIdIndex].id : null,
  };
};

export {
  makeFakeOfferId,
  makeFakeLocation,
  makeFakeOffer,
  makeFakeOfferAdditionalData,
  makeFakeHostUser,
  makeFakeOffersState,
  makeFakeReview,
};

export type {
  FakeOffersStateProps,
};
