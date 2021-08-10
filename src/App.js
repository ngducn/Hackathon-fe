import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Register from "./pages/RegisterPage/RegisterPage";
import Navbar from "./components/Navbar";
import Login from "./pages/LogInPage/LogInPage";
import Donate from "./pages/DonatePage/DonatePage";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/donate" exact component={Donate} />
      </Switch>
    </div>
  );
}

export default App;
