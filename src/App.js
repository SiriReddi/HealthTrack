import React from "react";

import Main from "./main";
import Login from "./pages/login/Login";
import Signup from "./pages/login/signup";
// import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Card } from "react-bootstrap";

import BmiCalculator from "./components/bmiCalculator";
import Macros from "./components/macros";
import TargetHeartRate from "./components/targetHeartRate";
import Home from "./components/home";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Bmi-Calculator" component={BmiCalculator} />

        <Route path="/macros-calculator" component={Macros} />
        <Route path="/target-heart-rate" component={TargetHeartRate} />
      </Switch>
    </div>
  </Router>
);

export default App;
