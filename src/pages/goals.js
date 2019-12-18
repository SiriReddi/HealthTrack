import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import GoalComponent from "../components/GoalComponent";

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      currentUserId: null
    };
  }

  //
  /* API CALLS  */

  /* Goal API Calls */

  /* Set User Goals */
  postUserGoals = e => {
    e.preventDefault();
    const _currentWeight = e.target.weight.value;
    const _idealWeight = e.target.goal.value;
    const _by = e.target.by.value;
    const _user = this.state.currentUserId;

    axios
      .post("http://localhost:3001/goals/update", {
        weight: _currentWeight,
        goal: _idealWeight,
        by: _by,
        user: _user
      })
      .then(response => {
        this.getUserGoals(this.state.userId);
        this.pushNavigation("/Goals");
      })
      .catch(err => {
        console.log(err);
      });
  };

  /* Get User Goals */
  getUserGoals = userId => {
    const _userId = userId;
    axios
      .get("http://localhost:3001/goals/user/all", {
        _id: userId
      })
      .then(response => {
        const returnedGoals = response.data[0];
        this.setState({
          user: {
            weight: !!returnedGoals ? returnedGoals.weight : "[Input Above]",
            goal: !!returnedGoals ? returnedGoals.goal : "[Input Above]",
            by: !!returnedGoals ? returnedGoals.by : "[Input Above]"
          }
        });
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

  renderApp = e => {
    this.setState({ user: e });
    this.postUserGoals(e);
  };

  componentDidMount() {
    //On app mount: if user stored in local log them in
    const getUserFromLocalStorage = localStorage.getItem("userName");
    const getIdFromLocalStorage = localStorage.getItem("userId");
    if (!!getIdFromLocalStorage) {
      console.log("ID from local storage", getIdFromLocalStorage);

      this.handleSetUser(getUserFromLocalStorage, getIdFromLocalStorage);
      this.getUserGoals(getIdFromLocalStorage);
    }
  }
  render() {
    console.log("props", this.props);
    console.log("state", this.state);
    //Destructuring
    const { currentUser, user, logs } = this.state;

    return (
      <div id="app-container">
        {!!this.state.user ? (
          <GoalComponent
            {...this.props}
            handleAddUserGoal={this.postUserGoals}
            userGoals={user}
          />
        ) : null}
      </div>
    );
  }
}

export default Goals;
