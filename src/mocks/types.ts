import { CitiesType } from '../constants';

type OfferData = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type OfferDetailData = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: CityType;
  location: LocationType;
  goods: string[];
  host: HostUserType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

type HostUserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

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
  HostUserType,
  CommentData,
  CityType,
  LocationType,
};
