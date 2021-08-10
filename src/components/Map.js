import React, { useState } from "react";
import {
  Map,
  Marker,
  Circle,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";

import {
  faAddressBook,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Container } from "react-bootstrap";

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
  console.log({ selectedPetition });
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
      {props.petitions?.map((s) => {
        if (s.endLoc) {
          return (
            <Marker
              class="pulse"
              name={s.type}
              onClick={onMarkerClick}
              position={{ lat: s.endLoc.lat, lng: s.endLoc.lng }}
              requesterName={s.owner.firstName + " " + s.owner.lastName}
              items={s.items}
            />
          );
        }
      })}
      <InfoWindow
        onClose={onClose}
        visible={infoWindow}
        marker={activePetition}
      >
        <Container
          // For a red pulse
          // className="icon"
          fluid
        >
          <h1 className="text-center">Assistance Request</h1>
          <hr></hr>
          <Row>
            <Col>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <FontAwesomeIcon
                    icon={faAddressBook}
                    style={{ marginRight: 5 }}
                  />
                  Name
                </div>
                <div>{selectedPetition.requesterName}</div>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      style={{ marginRight: 5 }}
                    />
                    Type
                  </div>
                </div>
                <div>{selectedPetition.name}</div>
              </div>
            </Col>
          </Row>
        </Container>
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
