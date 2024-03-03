import { useEffect, useRef } from 'react';
import { useMap } from '../../../hooks';
import { CityType, LocationType } from '../../../mocks';
import { LatLng, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// const defaultCustomIcon = new Icon({
//   iconUrl: URL_MARKER_DEFAULT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });
//
// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

type MapProps = {
  locations: LocationType[];
  city: CityType;
};

function Map({locations, city}: MapProps) {
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
        // .setIcon(
        //   selectedPoint !== undefined && point.title === selectedPoint.title
        //     ? currentCustomIcon
        //     : defaultCustomIcon
        // )
        .addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, locations, location]);

  return (
    <section id="map" ref={mapRef} style={{height: '100%', width: '500px'}}></section>
  );
}

export default Map;
