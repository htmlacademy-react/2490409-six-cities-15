import { CitiesType } from '../types';
import { HostUserType } from '../types';
import { Housing } from '../constants';

type HousingType = keyof typeof Housing;

type OfferData = {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type OfferDetailData = OfferData & {
  description: string;
  images: string[];
  goods: string[];
  host: HostUserType;
  bedrooms: number;
  maxAdults: number;
};

type AdditionalDataType = Omit<OfferDetailData, keyof OfferData> & {id: OfferData['id']};

type CommentData = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: HostUserType;
};

type CityType = {
  name: CitiesType;
  location: LocationType;
};

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type {
  OfferData,
  OfferDetailData,
  AdditionalDataType,
  CommentData,
  CityType,
  LocationType,
  HousingType,
};
