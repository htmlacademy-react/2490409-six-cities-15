import { useEffect } from 'react';
import { LatLng, Map } from 'leaflet';
import { CityType, LocationType } from '../mocks';

function useCityLocation(map: Map | null, city: CityType, location: LocationType) {
  useEffect(() => {
    if (!map) {
      return;
    }

    map
      .panTo(new LatLng(location.latitude, location.longitude))
      .setZoom(location.zoom);
  }, [city]);
}

export default useCityLocation;
