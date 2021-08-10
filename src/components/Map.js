import React, { useState } from "react";
import {
  Map,
  Circle,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
} from "google-maps-react";

import "./style.css";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

const petitions = [
  {
    type: "receive",
    endLoc: {
      lat: 10.797914587330832,
      lng: 106.71326158912827,
    },
    items: [{ type: "rice", quantity: 1, kg: 1 }],
  },
  {
    type: "receive",
    endLoc: {
      lat: 10.801024084611207,
      lng: 106.69901655713389,
    },
  },
  {
    type: "receive",
    endLoc: {
      lat: 10.802791798164124,
      lng: 106.71699088213137,
    },
  },
  {
    type: "receive",
    endLoc: {
      lat: 10.792185360807064,
      lng: 106.70875174642686,
    },
  },
];

function MapContainer(props) {
  const [infoWindow, setInfoWindow] = useState(false);
  const [activePetition, setActivePetition] = useState({});
  const [selectedPetition, setSelectedPetition] = useState(petitions[0]);

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
