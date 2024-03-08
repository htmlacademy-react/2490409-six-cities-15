import { MutableRefObject, useEffect, useRef } from 'react';
import { LocationType } from '../mocks';
import { Map, TileLayer } from 'leaflet';

const TILE_LAYER_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: LocationType): Map | null {
  const map = useRef<Map|null>(null);

  useEffect(() => {
    if (mapRef.current === null || map.current !== null) {
      return;
    }

    const instance = new Map(mapRef.current, {
      center: {
        lat: location.latitude,
        lng: location.longitude,
      },
      zoom: location.zoom,
    });

    const layer = new TileLayer(
      TILE_LAYER_URL_TEMPLATE,
      {
        attribution: TILE_LAYER_ATTRIBUTION,
      }
    );

    instance.addLayer(layer);

    map.current = instance;
  }, [mapRef, location]);

  return map.current;
}

export default useMap;
