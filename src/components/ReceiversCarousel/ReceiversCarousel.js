import React from "react";
import "./ReceiverCarousel.css";
import Card from "../ReceiverCard/ReceiverCard";

import SwiperCore, { Navigation } from "swiper";
import { Container, Row } from "react-bootstrap";

SwiperCore.use([Navigation]);

const ReceiversCarousel = ({ items }) => {
  return items && items.length > 0 ? (
    <Container>
      <h2 style={{ color: "grey" }}>Featured Projects</h2>
      <br></br>
      <Row xs={12} md={3} lg={4}>
        {items.map((i) => (
          <Card {...i} />
        ))}
      </Row>
    </Container>
  ) : (
    <h1> loading </h1>
  );
};

export default ReceiversCarousel;
