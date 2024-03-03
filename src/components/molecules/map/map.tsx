import { CSSProperties, useRef } from 'react';
import {useSetCityLocation, useMap, useSetMarkers} from '../../../hooks';
import { CityType, LocationType } from '../../../mocks';
import 'leaflet/dist/leaflet.css';
import { Nullable } from 'vitest';

type MapProps = {
  locations: Array<LocationType & { id: string }>;
  city: CityType;
  selectedCardId: Nullable<string>;
  className?: string;
  style?: CSSProperties;
};

function Map({locations, city, selectedCardId, className, style}: MapProps) {
  const { location } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useSetCityLocation(map, city, location);

  useSetMarkers(map, locations, selectedCardId);

  return (
    <section id="map" ref={mapRef} className={className} style={style}></section>
  );
}

export default Map;
