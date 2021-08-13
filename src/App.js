import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FundingPage from "./pages/FundingPage";

import Navbar from "./components/Navbar";
import FunDetailRequestInfo from "./components/FunDetailRequestInfo/FunDetailRequestInfo";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/funding" exact component={FundingPage} />
        <Route path="/funDetailPage" exact component={FunDetailRequestInfo} />
      </Switch>
    </div>
  );
}

export default App;
