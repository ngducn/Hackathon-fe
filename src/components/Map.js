import React, { useState, useEffect } from "react";
import {
  Map,
  Marker,
  Circle,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";

import { faAddressBook, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
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

  const [currentLocation, setCurrentLocation] = useState({});
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


  useEffect( () => {
    window.navigator.geolocation.getCurrentPosition((foo) => {
      console.log('Gotcha', foo.coords);
      setCurrentLocation({ lat: foo.coords.latitude, lng: foo.coords.longitude });
    })
  }, [])

  return (
    <Map
      zoom={15}
      style={mapStyles}
      google={props.google}
      initialCenter={{
        lat: 10.796143556994366,
        lng: 106.71969978644816,
      }}
    >
      {currentLocation && (
        <Marker
          class="pulse"
          name={"Here"}
          requesterName={"You"}
          onClick={onMarkerClick}
          position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
        />
      )}
      {props.petitions.map((s) => {
        const lat = s.endLoc?.lat || s.startLoc?.lat
        const lng = s.endLoc?.lng || s.startLoc?.lng;
        return (
          <Marker
            class="pulse"
            name={s.type}
            onClick={onMarkerClick}
            position={{ lat, lng }}
            requesterName={s.owner.firstName + " " + s.owner.lastName}
          />
        );
      })}
      <InfoWindow
        onClose={onClose}
        visible={infoWindow}
        marker={activePetition}
      >
        <Container
          fluid
          // For a red pulse
          className="info-panel"
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
        radius={2000}
        strokeOpacity={0}
        strokeWeight={10}
        fillOpacity={0.1}
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
