import React from "react";

import Main from "./main";
import Login from "./pages/login/Login";
import Signup from "./pages/login/signup";
import FoodLog from "./pages/FoodLog";
import Goals from "./pages/goals";
import ExerciseGoal from "./pages/ExercisePage/ExercisePage";
import WaterGoal from "./pages/WaterPage/WaterPage";
import DashboardPage from "./pages/Dashboard";
import Video from "./pages/Video";
import MacroDashPage from "./pages/MacroDashboardPage/MacroPage";
import FoodDashboard from "./pages/FoodDashboard";
import ExerciseDashboard from "./pages/ExerciseDashboard";
// import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Card } from "react-bootstrap";

import BmiCalculator from "./components/bmiCalculator";
import Macros from "./components/macros";
import TargetHeartRate from "./components/targetHeartRate";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/Dashboard" component={DashboardPage} />
        <Route path="/Food-Dairy" component={FoodDashboard} />
        <Route exact path="/Exercise" component={ExerciseDashboard} />
        <Route path="/Goals" component={MacroDashPage} />
        <Route path="/Bmi-Calculator" component={BmiCalculator} />
        <Route path="/macros" component={Macros} />
        <Route path="/target-heart-rate" component={TargetHeartRate} />
        <Route path="/water" component={WaterGoal} />
        <Route path="/Video" component={Video} />
      </Switch>
    </div>
  </Router>
);

export default App;
