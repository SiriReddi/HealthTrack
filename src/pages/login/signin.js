import React, { Component } from "react";

import { Route, Switch, Link } from "react-router-dom";

//Base Login component, decides which to display
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localEntry: {
        email: "",
        password: ""
      }
    };

    //Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /* Form inputs are pushed up into this.state.entry so that React has total control of the data */
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const inputName = target.name;

    //Copy entry from state and then add changes
    let entryCopy = Object.assign({}, this.state.localEntry);
    entryCopy[inputName] = value;

    //Replace object in state with updated object
    this.setState({
      localEntry: entryCopy
    });
  }

  render() {
    const { handleCreateUser, handleLoginUser } = this.props;

    return (
      <aside id="login-container" className="flex-col">
        <div className="login-body flex-col">
          <form
            id="signup-form"
            className="flex-col"
            onSubmit={handleLoginUser}
          >
            <div className="form-field heading-text">
              Email:
              <input
                type="text"
                name="email"
                value={this.state.localEntry.email}
                onChange={this.handleInputChange}
                placeholder="me@theplace.io"
                required
              />
            </div>
            <div className="form-field heading-text">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.localEntry.password}
                onChange={this.handleInputChange}
                minLength="6"
                maxLength="20"
                placeholder="6-20 characters"
                required
              />
            </div>
            <h4 id="submit-error"> </h4>
            <input
              type="submit"
              name="submit"
              id="loginSubmit"
              className="heading-text submit-button"
              value={
                !this.state.localEntry.username
                  ? "Welcome Back Friend!"
                  : `Welcome Back ${this.state.localEntry.username}!`
              }
            />
          </form>
        </div>
      </aside>
    );
  }
}

export default SignIn;
