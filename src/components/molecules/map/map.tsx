import { useRef } from 'react';
import {useCityLocation, useMap, useMarkers} from '../../../hooks';
import { CityType, LocationType } from '../../../mocks';
import 'leaflet/dist/leaflet.css';
import { Nullable } from 'vitest';

type MapProps = {
  locations: Array<LocationType & { id: string }>;
  city: CityType;
  selectedCardId: Nullable<string>;
};

function Map({locations, city, selectedCardId}: MapProps) {
  const { location } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useCityLocation(map, city, location);

  useMarkers(map, locations, selectedCardId);

  return (
    <section id="map" ref={mapRef} style={{height: '100%', width: '500px'}}></section>
  );
}

export default Map;
