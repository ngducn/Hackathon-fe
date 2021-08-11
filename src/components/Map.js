import React, { useState, useEffect } from "react";
import {
  Map,
  Marker,
  Circle,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";
// import icon from "./marker.png";
import {
  faAddressBook,
  faCalendarCheck,
  faCheckCircle,
  faUtensils,
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
  const [currentLocation, setCurrentLocation] = useState({});
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

  const handleItemCheck = () => {
    console.log("Hello");
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((foo) => {
      setCurrentLocation({
        lat: foo.coords.latitude,
        lng: foo.coords.longitude,
      });
    });
  }, []);

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
      {props.petitions?.map((s) => {
        const lat = s.endLoc?.lat || s.startLoc?.lat;
        const lng = s.endLoc?.lng || s.startLoc?.lng;
        return (
          <Marker
            class="pulse"
            name={s.type}
            items={s.items}
            status={s.status}
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
                <div>{selectedPetition?.name}</div>
              </div>
              <br></br>
              <h4>Items: </h4>
              <div>
                {selectedPetition.items?.map((item) => {
                  return (
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUtensils}
                            style={{ marginRight: 5 }}
                          />
                          {item?.type?.toUpperCase()}{" "}
                        </div>
                      </div>
                      <div>
                        {item.weight}kg
                        {item.status === "complete" ? ( //add a checkmark if an item is complete
                          <>
                            {" "}
                            <FontAwesomeIcon
                              onClick={handleItemCheck}
                              icon={faCheckCircle}
                              style={{
                                cursor: "pointer",
                                fontSize: "20px",
                              }}
                            />{" "}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex justify-content-between mb-3">
                  <div>Status: {selectedPetition?.status?.toUpperCase()}</div>
                </div>
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
