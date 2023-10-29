import useGoogleMap, {
  initialMapCoords,
} from "@hooks/sidebar/google-map/useGoogleMap";
import { GoogleMap } from "@react-google-maps/api";

const POIMap = () => {
  const { isLoaded, onLoad, onUnmount } = useGoogleMap();

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={initialMapCoords}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <></>
    </GoogleMap>
  ) : (
    <div>Loading ...</div>
  );
};

export default POIMap;

const containerStyle = {
  width: "100%",
  height: "100%",
};
