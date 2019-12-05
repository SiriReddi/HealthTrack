import React from "react";
import BmiCalculator from "./components/bmiCalculator";
import Macros from "./components/macros";
import TargetHeartRate from "./components/targetHeartRate";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

function App(props) {
  return (
    <BrowserRouter>
      <div className="body">
        <nav className="navbar">
          <div className="container">
            {/* <div className="navbar">
              <Link to="/"></Link>
            </div> */}
            <ul className="side-nav fixed z-depth-2">
              <li className="center no-padding">
                <div className="indigo darken-2 white-text">
                  <div className="row">
                    <img
                      width="100"
                      height="100"
                      src={require("./images.png")}
                      className="circle"
                    />

                    <p>
                      <i>Health Track</i>
                    </p>
                  </div>
                </div>
              </li>

              <li className="menu">
                <Link to="/Bmi-Calculator" style={{ textDecoration: "none" }}>
                  BMI
                </Link>
              </li>
              <li className="menu">
                <Link
                  to="/one-rep-max-calculator"
                  style={{ textDecoration: "none" }}
                >
                  Food Dairy
                </Link>
              </li>
              <li className="menu">
                <Link
                  to="/macros-calculator"
                  style={{ textDecoration: "none" }}
                >
                  Macros
                </Link>
              </li>
              <li className="menu">
                <Link
                  to="/target-heart-rate"
                  style={{ textDecoration: "none" }}
                >
                  Target Heart Rate
                </Link>
              </li>
              <li className="menu">
                <Link to="/program-picker" style={{ textDecoration: "none" }}>
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="card">
          <img
            className="card-img"
            src={require("./Rowing Machine.svg")}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Hello Sirisha</h5>
            <p className="card-text">Today is the perfect day to be fit!</p>
          </div>
        </div>
        {/* <Route exact={true} path="/" component={Home}/> */}
        <Route path="/Bmi-Calculator" component={BmiCalculator} />
        {/* <Route path="/one-rep-max-calculator" component={OneRepMax}/> */}
        <Route path="/macros-calculator" component={Macros} />
        <Route path="/target-heart-rate" component={TargetHeartRate} />
        {/* <Route path="/program-picker" component={ProgramPicker}/>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
