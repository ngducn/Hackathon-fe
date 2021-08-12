import React from "react";
import { Container } from "react-bootstrap";
import "./Introduction.css";

const Introduction = () => {
  return (
    <Container>
      <div className="py-5 ">
        <div className="container px-5">
          {/* <h1 className="fw-bolder fs-5 mb-4">Our Company</h1> */}
          <div className="card border-0  rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <div className="row gx-0">
                <div className="col-lg-6 col-xl-5 py-lg-5">
                  <div className="p-4 p-md-5">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <div className="h2 fw-bolder">Caring is sharing</div>
                    <p>
                      EZ-Donate is a charity app which allows users to donate
                      quickly to people in need.
                    </p>

                    {/* <a
                      className="stretched-link text-decoration-none"
                      href="#!"
                    >
                      Read more
                      <i className="bi bi-arrow-right"></i>
                    </a> */}
                  </div>
                </div>
                <div className="col-lg-6 col-xl-7 box-test">
                  <div className="bg-featured-blog"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="container">
        <div classNameName="leftside">
          <img src="https://i.ytimg.com/vi/qAiCYazj9Hw/hqdefault.jpg" alt="" />
        </div>
        <div classNameName="rightside">
          <h2>What is SOSmap?</h2>
          <p>
            SOSmap is a charity app which allows users to directly donate money,
            food, clothes and other things to people in need. Everyone can sign
            up to be a donor and help people in need today!
          </p>
          <p>
            Maecenas velit tellus, tristique quis orci id, gravida malesuada
            diam. Sed eget turpis enim. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Aliquam erat
            volutpat. Curabitur eu quam nec purus aliquam porttitor. Mauris in
            elit eu odio dictum tincidunt. Nam at augue erat. Nam auctor tellus
            eget urna tincidunt elementum.
          </p>
        </div>
      </div> */}
    </Container>
  );
};

export default Introduction;
