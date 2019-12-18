import React, { Component } from "react";
import SingleInput from "./input-fields/SingleInput";
import FieldError from "./input-fields/FieldError";
import DisplayOutput from "./display-output/DisplayOutput";
import HeartRateTable from "./HeartRateTable/HeartRateTable";
import FormValidation from "../utilities/FormValidation";
import MaxHeartRate from "../utilities/MaxHeartRate";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./Dashboard/sidebar/SidebarComponent";
import HeaderComponent from "./Dashboard/header/HeaderComponent";
import ContentComponent from "./Dashboard/content/ContentComponent";
import RightSideComponent from "./Dashboard/rightsidebar/RightSideBarComponent";
import RectCardComponent from "./Dashboard/content/RectCardComponent";
import "../App.css";

const styles = StyleSheet.create({
  dash: {
    background: "fixed"
  },
  container: {
    display: "flex",
    height: "100%",
    minHeight: "100vh"
  },
  minicontent: {
    width: "100%",
    borderRadius: "30%",
    padding: "10px",
    marginTop: 5
  },
  content: {
    marginTop: 5,
    border: "0.5px solid lightpink",
    borderRadius: "20px",
    color: "lightblue"
  },
  heading: {
    marginLeft: "40%",
    color: "pink"
  },
  contentside: {
    marginTop: 0,
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    width: "auto"
  },
  mainBlock: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    padding: 20,
    paddingRight: 10,
    width: "60%",
    maxWidth: "60%"
  }
});

class TargetHeartRate extends Component {
  constructor(props) {
    super();
    this.state = {
      age: "",
      rhr: "",
      hrMax: "",
      errors: {
        age: false,
        rhr: false
      }
    };
  }
  handleAgeChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ age: event.target.value });
  };
  handleRhrChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ rhr: event.target.value });
  };
  handleErrors = event => {
    const hasError = FormValidation(event.target.name, event.target.value);
    this.setState({
      errors: { ...this.state.errors, [event.target.name]: hasError }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const hrMax = MaxHeartRate(this.state.age);
    this.setState({ hrMax: hrMax });
  };
  canBeSubmitted = () => {
    const { age, rhr } = this.state;
    return age !== "" && parseFloat(age) > 0 && (rhr > 0 || rhr === "");
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <div className={css(styles.dash)}>
        <Row className={css(styles.container)}>
          <SidebarComponent
            selectedItem={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
          <Column flexGrow={1} className={css(styles.mainBlock)}>
            <HeaderComponent title={selectedItem} />
            <div className={css(styles.minicontent)}>
              <RectCardComponent />
            </div>
            <div className={css(styles.content)}>
              <h2 className={css(styles.heading)}>Target Heart Rate</h2>
              <p className="lead">
                This calculator will find your recommended maximum heart rate
                and then use that to find different heart ranges for different
                exercise intensities and workout goals.
              </p>

              <div className="row">
                <div className="col-sm-6">
                  <form
                    className="form-horizontal clearfix bottom-buffer"
                    onSubmit={this.handleSubmit}
                  >
                    <SingleInput
                      label="Age"
                      inputType="number"
                      name="age"
                      hasErrors={this.state.errors.age}
                      value={this.state.age}
                      width="80px"
                      handleChange={this.handleAgeChange}
                      handleErrors={this.handleErrors}
                    >
                      <FieldError
                        hasErrors={this.state.errors.age}
                        errorMsg="Age must be greater than 0"
                      />
                    </SingleInput>
                    <SingleInput
                      className="col-sm-10-rhr"
                      label="Resting HR"
                      inputType="number"
                      name="rhr"
                      hasErrors={this.state.errors.rhr}
                      value={this.state.rhr}
                      width="80px"
                      handleChange={this.handleRhrChange}
                      handleErrors={this.handleErrors}
                    >
                      bpm
                      <span className="help-block">
                        <em>Optional</em>
                      </span>
                      <FieldError
                        hasErrors={this.state.errors.rhr}
                        errorMsg="Resting heart rate must be greater than 0."
                      />
                    </SingleInput>
                    <div className="pull-right">
                      <button
                        type="submit"
                        disabled={!this.canBeSubmitted()}
                        className="btn btn-default"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="col-sm-6">
                    <DisplayOutput
                      hrMax={this.state.hrMax}
                      rhr={this.state.rhr}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <HeartRateTable
                    hrMax={this.state.hrMax}
                    rhr={this.state.rhr}
                  />
                </div>
              </div>
            </div>
          </Column>
          <div className={css(styles.contentside)}>
            <RightSideComponent />
          </div>
        </Row>
      </div>
    );
  }
}

export default TargetHeartRate;
