import React, { useState } from "react";
import {
  Map,
  Marker,
  Circle,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


import "./style.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

function MapContainer(props) {
  const [infoWindow, setInfoWindow] = useState(false);
  const [activePetition, setActivePetition] = useState({});
  const [selectedPetition, setSelectedPetition] = useState([]);

  const onMarkerClick = (props, marker, e) => {
    setActivePetition(marker);
    setSelectedPetition(props);
    setInfoWindow(true);
  };

  const onClose = () => {
    if (infoWindow) {
      setInfoWindow(false);
      setActivePetition(null);
    }
  };

  return (
    <Map
      zoom={14}
      style={mapStyles}
      google={props.google}
      initialCenter={{
        lat: 10.796143556994366,
        lng: 106.71969978644816,
      }}
    >
      {props.petitions.map((s) => {
        if (s.endLoc) {
          return (
            <Marker
              class="pulse"
              name={s.type}
              onClick={onMarkerClick}
              requesterName={s.owner.firstName}
              position={{ lat: s.endLoc.lat, lng: s.endLoc.lng }}
            />
          );
        }
      })}
      <InfoWindow
        onClose={onClose}
        visible={infoWindow}
        marker={activePetition}
        className="icon"
      >
        <div
          className="icon"
          style={{ height: 300, width: 300, borderRadius: "50%" }}
        >
          <h1>{selectedPetition.requesterName}</h1>
          <h6>{selectedPetition.name}</h6>
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </InfoWindow>
      <Circle
        radius={100}
        strokeOpacity={0}
        strokeWeight={10}
        fillOpacity={0.2}
        fillColor="#FF0000"
        strokeColor="transparent"
        onClick={() => console.log("click")}
        onMouseout={() => console.log("mouseout")}
        onMouseover={() => console.log("mouseover")}
        center={{ lat: 10.796143556994366, lng: 106.71969978644816 }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
