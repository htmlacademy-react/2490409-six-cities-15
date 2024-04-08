import { useEffect } from 'react';
import {layerGroup, Marker, Map, Icon} from 'leaflet';
import { LocationType } from '../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../constants';
import { Nullable } from 'vitest';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function useMarkers(
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
          selectedCardId && loc.id === selectedCardId
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

export {
  useMarkers,
};
