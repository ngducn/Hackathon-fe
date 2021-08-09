import React from 'react'
import { Map, GoogleApiWrapper } from "google-maps-react";

import Navbar from '../../components/Navbar'

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

function HomePage(props) {
  return (
    <div>
      <Navbar />
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 10.7469,
          lng: 106.6763,
        }}
      />
    </div>
  );
}

const MapContainer = GoogleApiWrapper({
  apiKey,
})(HomePage);


export default MapContainer;