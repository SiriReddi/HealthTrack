import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import "./foodlog.css";
import TodayIcon from "@material-ui/icons/Today";

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localEntry: {
        day: "",
        meal: "",
        calories: ""
      }
    };

    //Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEntry = this.handleAddEntry.bind(this);
  }

  /* Form inputs are pushed up into this.state.localEntry so that React has total control of the data */
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

  /*Commits info from temporary this.state.localEntry to permanent entry in DB log through postUserLogs function in app.js and resets input fields in localEntry */
  handleAddEntry(e) {
    const currentDay = this.state.localEntry.day;
    const currentMeal = this.state.localEntry.meal;
    const currentCalories = this.state.localEntry.calories;

    //Build new object to pass to postUserLogs function in app.js
    const newEntry = {
      day: `${currentDay}`,
      meal: `${currentMeal}`,
      calories: `${currentCalories}`
    };

    //Pass newEntry object to postUserLogs function in app.js
    this.props.postLog(newEntry);

    //Reset log entry form
    this.setState({
      localEntry: {
        day: "",
        meal: "",
        calories: ""
      }
    });
  }

  render() {
    //Destructuring
    const { userLogs, removeLog } = this.props;
    const { localEntry } = this.state;

    return (
      <div id="log">
        <h2 className="titleheader">Add today's Meals</h2>

        <Row className="dayentry">
          <h4 className="dayentry">Day: </h4>
          <div className="dayentry item">
            <select
              name="day"
              value={localEntry.day}
              onChange={this.handleInputChange}
            >
              <option>Choose Day</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <h4 className="dayentry">Meal: </h4>
          <div className="dayentry item">
            <select
              name="meal"
              value={localEntry.meal}
              onChange={this.handleInputChange}
            >
              <option>Choose Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <h4 className="dayentry">Calories: </h4>
          <div className="dayentry">
            <input
              className="cal"
              name="calories"
              type="number"
              placeholder="Number Only"
              value={localEntry.calories}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            name="add"
            className="entrybutton"
            onClick={this.handleAddEntry}
          >
            <i className="far fa-times-circle"></i>
          </button>
        </Row>

        {/* Map over this.state.log and display each entry */}
        <table className="logentrytable">
          {/* <h4 className="logentrytitle">Log Entries </h4> */}
          {userLogs.map((currentEntry, index) => (
            <table className="logentry" key={index}>
              <Row className="logentryRow">
                <span className="logentry">
                  <TodayIcon />
                  <h4 className="logday"> {currentEntry.day} </h4>
                </span>

                <h4 className="logmeal">{currentEntry.meal}</h4>

                <h4 className="logcal">{currentEntry.calories} cal</h4>
                <button
                  name="remove"
                  className="removebutton"
                  onClick={() => {
                    removeLog(currentEntry.id);
                  }}
                >
                  <i className="far fa-times-circle"></i>
                </button>
              </Row>
            </table>
          ))}
        </table>
      </div>
    );
  }
}

export default Log;
