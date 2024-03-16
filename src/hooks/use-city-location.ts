import { useEffect } from 'react';
import { Map } from 'leaflet';
import { LocationType } from '../types';

function useCityLocation(map: Map | null, location: LocationType) {
  const { latitude, longitude, zoom } = location;

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView([latitude, longitude], zoom);
  }, [latitude, longitude, zoom, map]);
}

export default useCityLocation;
