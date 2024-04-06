import { datatype, helpers, image, name, lorem, date } from 'faker';
import {
  AdditionalDataType, CommentData,
  HostUserType,
  HousingType,
  LocationType,
  OfferData, OfferDetailData,
  RequestStatusType,
} from '../../types';
import { CITIES, HOUSING, REQUEST_STATUS } from '../../constants';
import { OffersStateType } from '../../store/slices/offers';

const makeFakeOfferId = (): OfferData['id'] => datatype.uuid();

const makeFakeLocation = (): LocationType => ({
  latitude: datatype.number({ min: 0, max: 180, precision: 0.01 }),
  longitude: datatype.number({ min: 0, max: 180, precision: 0.01 }),
  zoom: datatype.number({ min: 0, max: 180, precision: 0.01 }),
});

const makeFakeOffer = (id: OfferData['id']): OfferData => ({
  id,
  title: datatype.string(30),
  type: helpers.randomize(Object.keys(HOUSING) as HousingType[]),
  price: datatype.number(1000),
  previewImage: image.image(),
  city: {
    name: helpers.randomize(Object.values(CITIES)),
    location: makeFakeLocation(),
  },
  location: makeFakeLocation(),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5 }),
});

const makeHostUser = (): HostUserType => ({
  name: name.title(),
  avatarUrl: image.image(),
  isPro: datatype.boolean(),
});

const makeOfferAdditionalData = (id: OfferData['id']): AdditionalDataType => ({
  id,
  description: lorem.words(30),
  images: Array(10).map(() => image.image()),
  goods: Array(10).map(() => datatype.string(10)),
  host: makeHostUser(),
  bedrooms: datatype.number({min: 1, max: 3}),
  maxAdults: datatype.number({min: 1, max: 6}),
});

const makeFakeReview = (id: OfferDetailData['id']): CommentData => ({
  id,
  comment: lorem.words(15),
  date: date.past(2).toLocaleDateString('en', { month: 'long', year: 'numeric' }),
  rating: datatype.number({ min: 1, max: 5 }),
  user: makeHostUser(),
});

type FakeOffersStateProps = {
  offersLen: number;
  additionalDataIndex?: number;
  detailOfferReviewsLen?: number;
  nearbyIndexes?: number[];
  offersRequestStatus?: RequestStatusType;
  reviewRequestStatus?: RequestStatusType;
  activeOfferIdIndex?: number;
};

const makeFakeOffersState = (
  {
    offersLen,
    additionalDataIndex,
    detailOfferReviewsLen,
    nearbyIndexes,
    offersRequestStatus,
    reviewRequestStatus,
    activeOfferIdIndex
  }: FakeOffersStateProps
): OffersStateType => {
  const offersIds = Array(offersLen).fill('').map(() => datatype.uuid());
  const offers = offersIds.map((id) => makeFakeOffer(id));
  const additionalOfferDataId = additionalDataIndex !== undefined ? offers[additionalDataIndex].id : null;

  return {
    offers,
    additionalOfferData: additionalOfferDataId ? makeOfferAdditionalData(additionalOfferDataId) : null,
    detailOfferReviews: detailOfferReviewsLen !== undefined && additionalOfferDataId !== null
      ? Array(detailOfferReviewsLen).fill('').map(() => makeFakeReview(additionalOfferDataId))
      : null,
    nearbyOffersIds: nearbyIndexes ? nearbyIndexes.map((i) => offers[i].id) : [],
    offersRequestStatus: offersRequestStatus ?? REQUEST_STATUS.Idle,
    reviewRequestStatus: reviewRequestStatus ?? REQUEST_STATUS.Idle,
    activeOfferId: activeOfferIdIndex ? offers[activeOfferIdIndex].id : null,
  };
};

export {
  makeFakeOfferId,
  makeFakeLocation,
  makeFakeOffer,
  makeOfferAdditionalData,
  makeHostUser,
  makeFakeOffersState,
  makeFakeReview,
};
