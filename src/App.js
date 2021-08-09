import React from 'react'

import { Map, GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 10.7469,
          lng: 106.6763,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);