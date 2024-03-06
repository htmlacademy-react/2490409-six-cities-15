import { useEffect } from 'react';
import { LatLng, Map } from 'leaflet';
import { CityType, LocationType } from '../mocks';

function useCityLocation(map: Map | null, city: CityType, location: LocationType) {
  const { latitude, longitude, zoom } = location;

  useEffect(() => {
    if (!map) {
      return;
    }

    map
      .panTo(new LatLng(latitude, longitude))
      .setZoom(zoom);
  }, [city, latitude, longitude, zoom, map]);
}

export default useCityLocation;
