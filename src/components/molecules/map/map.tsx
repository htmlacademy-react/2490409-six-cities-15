import { useRef, CSSProperties } from 'react';
import { useCityLocation, useMap, useMarkers } from '../../../hooks';
import { CityType, LocationType, MapStyleClassType } from '../../../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  locations: Array<LocationType & { id: string }>;
  city: CityType;
  selectedCardId?: string | null;
  classType?: MapStyleClassType;
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
