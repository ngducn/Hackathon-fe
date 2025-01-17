import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <Router>
      <App />
    </Router>
     </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
