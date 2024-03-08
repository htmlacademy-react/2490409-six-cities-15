import {CITIES, CitiesType} from '../constants';

type ComponentStyleType = 'place-card' | 'offer' | 'reviews';
type PlaceStyleType = 'cities' | 'near-places';
type MapStyleType = 'cities' | 'offer';
type OfferFeatureType = 'entire' | 'bedrooms' | 'adults';

const isCity = (value: string): value is CitiesType => (
  Object.values<string>(CITIES).includes(value)
);

export {
  isCity
};

export type {
  ComponentStyleType,
  PlaceStyleType,
  OfferFeatureType,
  MapStyleType,
};
