import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const useGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [_map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(initialMapCoords);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return {
    isLoaded,
    onLoad,
    onUnmount,
  };
};

export default useGoogleMap;

export const initialMapCoords = {
  lat: 51.509865,
  lng: -0.118092,
};
