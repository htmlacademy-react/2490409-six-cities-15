import { useEffect, useRef } from 'react';
import { useMap } from '../../../hooks';
import { CityType, LocationType } from '../../../mocks';
import {Icon, LatLng, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Nullable } from 'vitest';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../constants';

type MapProps = {
  locations: Array<LocationType & { id: string }>;
  city: CityType;
  selectedCardId: Nullable<string>;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({locations, city, selectedCardId}: MapProps) {
  const { location } = city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (!map) {
      return;
    }

    map
      .panTo(new LatLng(location.latitude, location.longitude))
      .setZoom(location.zoom);

    const markerLayer = layerGroup().addTo(map);
    locations.forEach((loc) => {
      const marker = new Marker({
        lat: loc.latitude,
        lng: loc.longitude,
      });

      marker
        .setIcon(
          selectedCardId !== undefined && loc.id === selectedCardId
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, locations, location, selectedCardId]);

  return (
    <section id="map" ref={mapRef} style={{height: '100%', width: '500px'}}></section>
  );
}

export default Map;
