import { useRef, CSSProperties } from 'react';
import { useCityLocation, useMap, useMarkers } from '../../../hooks';
import { CityType, LocationType } from '../../../mocks';
import 'leaflet/dist/leaflet.css';
import { Nullable } from 'vitest';
import { MapStyleType } from '../../../types';

type MapProps = {
  locations: Array<LocationType & { id: string }>;
  city: CityType;
  selectedCardId?: Nullable<string>;
  classType?: MapStyleType;
  style?: CSSProperties;
};

function Map({locations, city, selectedCardId = null, classType, style}: MapProps) {
  const { location } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useCityLocation(map, location);

  useMarkers(map, locations, selectedCardId);

  return (
    <section id="map" ref={mapRef} className={`${classType}__map map`} style={style}></section>
  );
}

export default Map;
