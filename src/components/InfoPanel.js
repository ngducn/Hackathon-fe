import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faAddressBook,
  faCheckCircle,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

import {

  InfoWindow,
} from "google-maps-react";

export default function InfoPanel(props) {
  const {
    onClose,
    infoWindow,
    activePetition,
    selectedPetition,
    handleItemCheck,
  } = props;
  console.log({ infoWindow });
  return (
    <InfoWindow onClose={onClose} visible={infoWindow} marker={activePetition}>
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
            </div>
          </Col>
        </Row>
      </Container>
    </InfoWindow>
  );
}
