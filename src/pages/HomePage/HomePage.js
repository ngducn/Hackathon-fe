import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import MapContainer from "../../components/Map";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

const defaultCurrentLocation = {
  zoom: 14,
  visible: true,
  centerAroundCurrentLocation: false,
  initialCenter: {
    lat: 10.7469,
    lng: 106.6763,
  },
};

function HomePage(props) {
  const [showInfo, setShowInfo] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [currentLocation, setCurrentLocation] = useState(
    defaultCurrentLocation,
  );

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowInfo(true);
  };

  const onClose = (props) => {
    if (showInfo) {
      setShowInfo(false);
      setActiveMarker(null);
    }
  };

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { coords } = pos;
        console.log({ coords });
        setCurrentLocation({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
        });
      });
    }
  }, []);

  return (
    <div>
      <MapContainer />
    </div>
  );
}

export default HomePage;
