import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Style2.css";

function Carousel2() {
  return (
    <div className="">
      <Carousel fade>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601841162542-956af38ba052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="color-title">
            <h3>Long Covid: 'I can't walk 10m without a rest'</h3>
            <p>She says long Covid changed her life completely.</p>
            <a
              href="https://www.bbc.com/news/health-54296223"
              className="text-white"
            >
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
          />

          <Carousel.Caption className="color-title ">
            <h3>Persistent pain and breathlessness for months.</h3>
            <p>
              {" "}
              why people get long Covid or whether everyone will fully recover -
              are riddled with uncertainty.
            </p>
            <a
              href="https://www.bbc.com/news/world-asia-india-58066768"
              className="text-white"
            >
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="height95vh">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601273703778-54f00287ae5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Third slide"
          />

          <Carousel.Caption className="color-title ">
            <h3>Assam-Mizoram clash</h3>
            <p>'It was like a war between two countries'</p>
            <a
              href="https://www.bbc.com/news/uk-58153711  "
              className="text-white"
            >
              Read more
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="color-box d-none d-lg-block ">
        <div className="card-body p-4">
          <h1 className="card-title mb-3 ">Sharing is Caring</h1>
          <p className="card-text mb-0 ">
            We're creating a P2P-microlending service to help address the urgent
            COVID-19 situation in Vietnam.
          </p>
        </div>
        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              <div className="small">
                <Button className="btn-primary">Discover project</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
