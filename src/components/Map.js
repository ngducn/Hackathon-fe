import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

const petitions = [
  {
    type: "receive",
    lat: 10.797914587330832,
    lng: 106.71326158912827,
    items: [
      { type: 'rice', quantity: 1, kg: 1 },
    ],
  },
  {
    type: "receive",
    lat: 10.801024084611207,
    lng: 106.69901655713389,
  },
  {
    type: "receive",
    lat: 10.802791798164124,
    lng: 106.71699088213137,
  },
  {
    type: "receive",
    lat: 10.792185360807064,
    lng: 106.70875174642686,
  },
];

export class MapContainer extends Component {
  state = {
    infoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      infoWindow: true,
    });

  onClose = (props) => {
    if (this.state.infoWindow) {
      this.setState({
        infoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        zoom={16}
        style={mapStyles}
        google={this.props.google}
        initialCenter={{
          lat: 10.796143556994366,
          lng: 106.71969978644816,
        }}
      >
        {petitions.map((s) => {
          return (
            <Marker
              name={s.type}
              onClick={this.onMarkerClick}
              position={{ lat: s.lat, lng: s.lng }}
            />
          );
        })}
        <InfoWindow
          onClose={this.onClose}
          marker={this.state.activeMarker}
          visible={this.state.infoWindow}
        >
          <div style={{ height: 300, width: 300, backgroundColor: 'red'}}>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
