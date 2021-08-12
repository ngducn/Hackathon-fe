import React from "react";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "beautiful-react-hooks";

import "./Style2.css";
function CarouselMainPage() {
  const isSmall = useMediaQuery("(max-width: 576px)");
  const isMedium = useMediaQuery("(min-width:576px) and (max-width:768px)");
  const isLarge = useMediaQuery("(max-width:992px)");
  const url = "";
  return (
    <div
      className="bg-pink  py-5  "
      style={{
        backgroundImage:
          isMedium || isSmall
            ? "linear-gradient(to top, #ef8172 20%, transparent 68%),url(https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)"
            : "linear-gradient(to left, #ef8172 50%, transparent 70%),url(https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
      }}
    >
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div
            className="col-md-8 col-lg-7 col-xl-6"
            style={{
              paddingTop: isSmall ? "0vh" : "30vh",
            }}
          >
            <p className="lead fw-normal text-white mb-4 ">
              Concerns over waning immunity and SARS-CoV-2 variants have
              convinced some countries to deploy extra vaccine doses.
            </p>
            <a href="" className="text-white">
              Read more
            </a>
          </div>
          <div className="col-md-5 col-xl-4 d-none d-lg-block  ">
            <div classNameName="">
              <div className=" mb-5 box">
                <div className="card h-100 shadow border-0">
                  <div className="card-body p-4">
                    <h1 className="card-title mb-3 ">Sharing is Caring</h1>
                    <p className="card-text mb-0 ">
                      Germany and Israel have announced plans for booster-shot
                      programmes, and a growing list of countries including the
                      United Arab Emirates
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <Button className="btn-primary" src="#!">
                            Discover project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselMainPage;
