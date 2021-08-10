import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
