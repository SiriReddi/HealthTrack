import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Log from "../components/FoodLog";

class FoodLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentUserId: null,
      logs: []
    };
  }

  //
  /* API CALLS  */

  /* LOG API CALLS*/

  /* Get user logs */
  getUserLogs = userId => {
    const _userId = userId;
    axios
      .get("http://localhost:3001/FoodLog/user/all", {
        userId: _userId
      })
      .then(response => {
        const returnedLogs = response.data;
        this.setState({
          logs: returnedLogs
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  /* Create log */
  postUserLogs = newEntry => {
    const _currentDay = newEntry.day;
    const _currentMeal = newEntry.meal;
    const _currentCalories = newEntry.calories;
    const _user = this.state.currentUserId;

    axios
      .post("http://localhost:3001/FoodLog/new", {
        day: _currentDay,
        meal: _currentMeal,
        calories: _currentCalories,
        user: _user
      })
      .then(response => {
        this.getUserLogs(this.state.userId);
        this.pushNavigation("/Food-Dairy");
        console.log("response", response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  /* Remove Log */
  removeUserLog = id => {
    axios
      .post("http://localhost:3001/FoodLog/remove", {
        refID: id
      })
      .then(res => {
        this.getUserLogs(this.state.userId);
        this.pushNavigation("/Food-Dairy");
      })
      .catch(err => {
        console.log(err);
      });
  };

  /* Sets new user in state as this.state.currentUser and
  sets user ID as this.state.currentUserId */
  handleSetUser = (newUser, newUserId) => {
    this.setState({ currentUser: newUser, currentUserId: newUserId });
  };

  /* Removes user info from local storage and
  navigates back to Landing */
  logoutUser = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    this.handleSetUser(null, null);
    this.pushNavigation(`/Home`);
  };

  //Navigate to new URL
  /* Uses react router dom history, needs History.js and
  needs history passed to <Router> in index.js */
  //   pushNavigation = path => {
  //     history.push(`${path}`);
  //   };

  renderApp = e => {
    this.setState({ user: e });
    // this.postUserGoals(e);
  };

  componentDidMount() {
    //On app mount: if user stored in local log them in
    const getUserFromLocalStorage = localStorage.getItem("userName");
    const getIdFromLocalStorage = localStorage.getItem("userId");
    if (!!getUserFromLocalStorage) {
      this.handleSetUser(getUserFromLocalStorage, getIdFromLocalStorage);
      this.getUserLogs(getIdFromLocalStorage);
    }
  }

  render() {
    //Destructuring
    const { currentUser, user, logs } = this.state;

    return (
      <div id="app-container">
        <Route
          path="/Food-Dairy"
          render={props => (
            <Log
              {...props}
              userLogs={logs}
              postLog={this.postUserLogs}
              removeLog={this.removeUserLog}
            />
          )}
        />
      </div>
    );
  }
}

export default FoodLog;
