import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function ToastSoS() {
  const toastState = useSelector((state) => state.toast);

  return toastState.loading ? (
    <Spinner animation="border" variant="primary" />
  ) : toastState.error ? (
    <div>
      <center>
        <div className="bg-danger ">
          <div className="bg-danger  ">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-white">
              Donation is at least 10000VND !
            </strong>
          </div>
          <div className="text-white">Please input again</div>
        </div>
      </center>
    </div>
  ) : toastState.state.donation ? (
    <div>
      <center>
        <div className="bg-success ">
          <div className="bg-success  ">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-white">
              Thank you so much for you donation! {toastState.state.name}!
            </strong>
          </div>
          <div className="text-white">
            Your contribution certificate will be sent to your mail box
          </div>
        </div>
      </center>
    </div>
  ) : (
    <h1></h1>
  );
}

export default ToastSoS;
