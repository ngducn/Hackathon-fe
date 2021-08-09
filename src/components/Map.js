import React, { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

const petitions = [
  {
    type: "receive",
    lat: 10.797914587330832,
    lng: 106.71326158912827,
    items: [{ type: "rice", quantity: 1, kg: 1 }],
  },
  {
    type: "receive",
    lat: 10.801024084611207,
    lng: 106.69901655713389,
  },
  {
    type: "receive",
    lat: 10.802791798164124,
    lng: 106.71699088213137,
  },
  {
    type: "receive",
    lat: 10.792185360807064,
    lng: 106.70875174642686,
  },
];

function MapContainer(props) {
  const [selectedPetition, setSelectedPetition] = useState({});
  const [activePetition, setActivePetition] = useState({});
  const [infoWindow, setInfoWindow] = useState(false);

  const onMarkerClick = (props, marker, e) => {
    setSelectedPetition(props);
    setActivePetition(marker);
    setInfoWindow(true);
  };

  const onClose = (props) => {
    if (infoWindow) {
      setActivePetition(null);
      setInfoWindow(false);
    }
  };

  return (
    <Map
      zoom={16}
      style={mapStyles}
      google={props.google}
      initialCenter={{
        lat: 10.796143556994366,
        lng: 106.71969978644816,
      }}
    >
      {petitions.map((s) => {
        return (
          <Marker
            name={s.type}
            onClick={onMarkerClick}
            position={{ lat: s.lat, lng: s.lng }}
          />
        );
      })}
      <InfoWindow
        onClose={onClose}
        marker={activePetition}
        visible={infoWindow}
      >
        <div style={{ height: 300, width: 300, backgroundColor: "red" }}>
          <h4>{selectedPetition.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
