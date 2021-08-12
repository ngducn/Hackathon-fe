import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ReceiverCard.css";
import { Card, CardGroup, Col, ProgressBar, Row } from "react-bootstrap";

const ReceiverCard = ({
  _id,
  media,
  receiver,
  location,
  need,
  requestingFor,
  details,
}) => {
  return (
    <>
      <CardGroup>
        <Row className="card-space ">
          <Col xs={12} md={3} lg={4}>
            <Card
              style={{
                width: "16rem",
                marginBottom: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={media}
                style={{
                  width: "100%",
                  height: "10rem",
                  backgroundPosition: "center",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>For: {requestingFor}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {need} VND
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <p>Location: {location}</p>
                    <p>{receiver && receiver.name}</p>
                    <Link to={`/requests/${_id}`} style={{ color: "grey" }}>
                      Read more
                    </Link>
                  </div>
                </Card.Text>
              </Card.Body>
              <ProgressBar variant="success" now={40} />
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};

export default ReceiverCard;
