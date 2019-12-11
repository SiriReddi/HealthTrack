import React from "react";
import BmiCalculator from "./bmiCalculator";
import Macros from "./macros";
import TargetHeartRate from "./targetHeartRate";
import Home from "./home";
import "../App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="body">
      <nav className="navbar">
        <div className="container">
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
              <Link to="/Home" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className="menu">
              <Link to="/Bmi-Calculator" style={{ textDecoration: "none" }}>
                BMI
              </Link>
            </li>
            <li className="menu">
              <Link to="/Food-Dairy" style={{ textDecoration: "none" }}>
                Food Dairy
              </Link>
            </li>
            <li className="menu">
              <Link to="/macros-calculator" style={{ textDecoration: "none" }}>
                Macros
              </Link>
            </li>
            <li className="menu">
              <Link to="/target-heart-rate" style={{ textDecoration: "none" }}>
                Target Heart Rate
              </Link>
            </li>
            <li className="menu">
              <Link to="/Login" style={{ textDecoration: "none" }}>
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="card">
        <img className="card-img" src={require("./RowingMachine.svg")} alt="" />
        <div className="card-body">
          <h5 className="card-title">Hello Sirisha</h5>
          <p className="card-text">Today is the perfect day to be fit!</p>
        </div>
      </div>

      {/* <Route exact path="/Home" component={Home} />
      <Route path="/Bmi-Calculator" component={BmiCalculator} />

      <Route path="/macros-calculator" component={Macros} />
      <Route path="/target-heart-rate" component={TargetHeartRate} /> */}
    </div>
  );
}

export default Nav;
