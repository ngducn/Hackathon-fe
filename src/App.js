import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Map, GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const mapStyles = {
  width: "100%",
  height: "100%",
};

function DetailPage() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

function HomePage(props) {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 10.7469,
        lng: 106.6763,
      }}
    />
  );
}

const MapContainer = GoogleApiWrapper({
  apiKey,
})(HomePage);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={MapContainer} />
        <Route path="/movie/:id" exact component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
