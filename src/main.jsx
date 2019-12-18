import React from "react";
import BmiCalculator from "./components/bmiCalculator";
import Macros from "./components/macros";
import TargetHeartRate from "./components/targetHeartRate";
import Home from "./components/home";
import FoodLog from "./pages/FoodLog";
import Goals from "./pages/goals";
import ExerciseGoal from "./pages/ExercisePage/ExercisePage";
import WaterGoal from "./pages/WaterPage/WaterPage";
import Video from "./pages/Video";

import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Main(props) {
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
                    <i>FitPal</i>
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
              <Link to="/Goals" style={{ textDecoration: "none" }}>
                Goals
              </Link>
            </li>
            <li className="menu">
              <Link to="/Exercise" style={{ textDecoration: "none" }}>
                Exercise
              </Link>
            </li>
            <li className="menu">
              <Link to="/Water" style={{ textDecoration: "none" }}>
                Water
              </Link>
            </li>
            <li className="menu">
              <Link to="/" style={{ textDecoration: "none" }}>
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
          <h5 className="card-title">Hello </h5>
          <p className="card-text">Today is the perfect day to be fit!</p>
        </div>
      </div>
      <Video />
      {/* <Route exact path="/Home" component={Home} />
      <Route path="/Bmi-Calculator" component={BmiCalculator} />

      <Route path="/macros-calculator" component={Macros} />
      <Route path="/target-heart-rate" component={TargetHeartRate} /> */}
    </div>
  );
}

export default Main;
