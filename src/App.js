import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage'

function DetailPage() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" exact component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
