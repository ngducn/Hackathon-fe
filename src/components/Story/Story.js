import React from "react";
import { Container } from "react-bootstrap";
import "./Story.css";

const Story = () => {
  return (
    <Container>
      <div class="py-5 " id="scroll-target">
        <h2 class="fw-bolder" style={{ color: "grey", paddingLeft: "2vw" }}>
          Success Stories{" "}
        </h2>

        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://whyy.org/wp-content/uploads/2021/01/AP21008641509024-768x512.jpg"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder"> Everyone got vaccine</h2>
              <p class="lead fw-normal text-muted mb-0">
                We are so glad to see one out patients being discharged from
                Specialty Hospital of Central Jersey. This patient was on a
                ventilator for six weeks, and in long-term acute care for two
                week, and finally discharged to go home. Thank you to all our
                hard working nurses and staff for giving him the best possible
                care to help him beat COVID-19. Because of our dedicated staff,
                this patient was finally able to see this six week year old
                loved one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Story;
