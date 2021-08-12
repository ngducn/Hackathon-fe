import React from "react";
import { useState } from "react";
import "./Imgupload.css";

const Imgupload = () => {
  const [imageURL, setImageURL] = useState("");
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "drupykrkw",
      uploadPreset: "gkc8r71a",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        setImageURL(result.info.url);
      }
    }
  );

  return (
    <div>
      <button
        onClick={myWidget.open}
        id="upload_widget"
        class="cloudinary-button"
      >
        Upload files
      </button>
      <img
        height="300px"
        width="300px"
        className="veripic"
        src={imageURL}
        alt="picture"
        style={imageURL ? { display: "block" } : { display: "none" }}
      />
    </div>
  );
};

export default Imgupload;
