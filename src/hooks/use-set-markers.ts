import { useEffect } from 'react';
import {layerGroup, Marker, Map, Icon} from 'leaflet';
import { LocationType } from '../mocks';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../constants';
import {Nullable} from 'vitest';

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

function useSetMarkers(
  map: Map | null, locations: Array<LocationType & { id: string }>, selectedCardId: Nullable<string>
) {
  useEffect(() => {
    if (!map) {
      return;
    }

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
  }, [map, locations, selectedCardId]);
}

export default useSetMarkers;