import { datatype, helpers, image, name } from 'faker';
import {AdditionalDataType, HostUserType, HousingType, LocationType, OfferData} from '../../types';
import { CITIES, HOUSING } from '../../constants';

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
  description: datatype.string(300),
  images: Array(10).map(() => image.image()),
  goods: Array(10).map(() => datatype.string(10)),
  host: makeHostUser(),
  bedrooms: datatype.number({min: 1, max: 3}),
  maxAdults: datatype.number({min: 1, max: 6}),
});

export {
  makeFakeLocation,
  makeFakeOffer,
  makeOfferAdditionalData,
  makeHostUser,
};
