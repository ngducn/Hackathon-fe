import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Map,
  Marker,
  Circle,
  InfoWindow,
  GoogleApiWrapper,
} from "google-maps-react";

import {
  faUtensils,
  faAddressBook,
  faCheckCircle,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

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
      const location = {
        lat: foo.coords.latitude,
        lng: foo.coords.longitude,
      };
      setCurrentLocation(location);
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
            owner={s.owner}
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
              <div className="d-flex p-3">
                <img
                  width={100}
                  height={100}
                  src={selectedPetition?.owner?.imageUrl}
                  alt={selectedPetition?.owner?.firstName}
                />
                <div className="d-flex flex-column p-3 w-100">
                  <div className="d-flex justify-content-between w-100 mb-3">
                    <div className="">
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        style={{ marginRight: 5 }}
                      />{" "}
                      Name{" "}
                    </div>
                    <div className="pl-1">{selectedPetition.requesterName}</div>
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
                </div>
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
                              icon={faCheckCircle}
                              onClick={handleItemCheck}
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
                <div>
                  <ButtonGroup aria-label="Basic example" className="m-3">
                    {selectedPetition?.items?.map((i) => {
                      return (
                        <Button variant="success" value={"m"}>
                          Provide {i.name}
                        </Button>
                      );
                    })}
                  </ButtonGroup>
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
        center={{ lat: currentLocation.lat, lng: currentLocation.lng }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
