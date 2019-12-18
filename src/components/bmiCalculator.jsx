import React, { Component } from "react";
import { UnitSelection, SexSelection } from "./toggles/index";
import SingleInput from "./input-fields/SingleInput";
import HeightInput from "./input-fields/HeightInput";
import UnitLabel from "./input-fields/UnitLabel";
import FieldError from "./input-fields/FieldError";
import ActivitySelect from "./input-fields/ActivitySelect";
import UnitConversion from "../utilities/UnitConversion";
import DisplayOutput from "./display-output/DisplayOutput";
import CalorieCalc from "../utilities/CalorieCalc";
import FormValidation from "../utilities/FormValidation";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./Dashboard/sidebar/SidebarComponent";
import HeaderComponent from "./Dashboard/header/HeaderComponent";
import ContentComponent from "./Dashboard/content/ContentComponent";
import RightSideComponent from "./Dashboard/rightsidebar/RightSideBarComponent";
import RectCardComponent from "./Dashboard/content/RectCardComponent";

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
class BmiCalculator extends Component {
  constructor(props) {
    super();
    this.state = {
      units: "",
      sex: "",
      displayWeight: "",
      masterWeight: "",
      age: "",
      feet: "",
      inches: "",
      activityLevel: "",
      masterHeight: "",
      bmr: "",
      tdee: "",
      errors: {
        units: false,
        sex: false,
        weight: false,
        age: false,
        height: false,
        activityLevel: false
      }
    };
  }
  handleUnitChange = event => {
    // cm to feet and inches
    if (this.state.units === "metric" && this.state.masterHeight) {
      const totalInches = parseFloat(this.state.masterHeight) * 0.393701;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(((totalInches % 12) * 10) / 10);
      this.setState({ inches: inches });
      this.setState({ feet: feet });
    }
    // kg to lb
    if (this.state.units === "metric" && this.state.displayWeight) {
      const lbConversion = parseFloat(this.state.displayWeight) * 2.20462;
      this.setState({ displayWeight: Math.round(lbConversion * 10) / 10 });
      // lb to kg
    } else if (this.state.units === "imperial" && this.state.displayWeight) {
      const kgConversion = parseFloat(this.state.displayWeight) * 0.453592;
      this.setState({ displayWeight: Math.round(kgConversion * 10) / 10 });
    }
    this.setState({ units: event.target.value });
  };
  handleSexChange = event => {
    this.setState({ sex: event.target.value });
  };
  handleWeightChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ displayWeight: event.target.value }, () => {
      if (this.state.units === "imperial") {
        this.setState({
          masterWeight: UnitConversion.lbToKg(this.state.displayWeight)
        });
      } else {
        this.setState({ masterWeight: this.state.displayWeight });
      }
    });
  };
  handleAgeChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ age: event.target.value });
  };
  handleCmChange = event => {
    this.setState({ masterHeight: event.target.value });
  };
  handleFeetChange = event => {
    this.setState({ feet: event.target.value }, function afterFeetChange() {
      this.setState({
        masterHeight: UnitConversion.imperialToCm(
          this.state.inches,
          this.state.feet
        )
      });
    });
  };
  handleInchesChange = event => {
    this.setState({ inches: event.target.value }, function afterInchesChange() {
      this.setState({
        masterHeight: UnitConversion.imperialToCm(
          this.state.inches,
          this.state.feet
        )
      });
    });
  };
  handleActivityLevelChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ activityLevel: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const bmr = CalorieCalc.BmiValues(
      this.state.sex,
      this.state.masterWeight,
      this.state.masterHeight,
      this.state.age,
      this.state.activityLevel
    );
    this.setState({
      bmr: bmr,
      tdee: Math.round(bmr * this.state.activityLevel)
    });
  };
  canBeSubmitted = () => {
    const {
      units,
      sex,
      masterWeight,
      age,
      activityLevel,
      masterHeight
    } = this.state;
    return (
      units !== "" &&
      sex !== "" &&
      parseFloat(masterWeight) > 0 &&
      parseFloat(age) > 0 &&
      activityLevel !== "" &&
      parseFloat(masterHeight) > 0
    );
  };
  handleErrors = event => {
    const hasError =
      FormValidation(event.target.name, event.target.value) ||
      event.target.value === "";
    this.setState({
      errors: { ...this.state.errors, [event.target.name]: hasError }
    });
  };
  handleImperialHeightErrors = event => {
    if (this.state.masterHeight > 0) {
      this.setState({
        errors: { ...this.state.errors, height: false }
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, height: true }
      });
    }
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
              {/* <div className="container-960"> */}
              <h2 className={css(styles.heading)}>BMI Calculator</h2>
              <p className="lead">
                Use our calculator to find out how many calories your body burns
                every day (Total Daily Energy Expenditure). It takes your
                individual body metrics and activity level and uses a <br></br>
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/2305711">
                  scientifically accurate
                </a>
                formula to get your personalized result.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <form
                    className="form-horizontal clearfix bottom-buffer"
                    onSubmit={this.handleSubmit}
                  >
                    <UnitSelection handleUnitChange={this.handleUnitChange} />
                    <SexSelection handleSexChange={this.handleSexChange} />
                    <SingleInput
                      className="col"
                      label="Weight"
                      inputType="number"
                      name="weight"
                      hasErrors={this.state.errors.weight}
                      value={this.state.displayWeight}
                      width="80px"
                      handleChange={this.handleWeightChange}
                      handleErrors={this.handleErrors}
                    >
                      <UnitLabel units={this.state.units} />
                      <FieldError
                        hasErrors={this.state.errors.weight}
                        errorMsg="Weight must be greater than 0"
                      />
                    </SingleInput>
                    <SingleInput
                      className="col"
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
                    <HeightInput
                      className="col"
                      name="height"
                      cm={this.state.masterHeight}
                      feet={this.state.feet}
                      inches={this.state.inches}
                      hasErrors={this.state.errors.height}
                      units={this.state.units}
                      handleErrors={this.handleErrors}
                      handleImperialHeightErrors={
                        this.handleImperialHeightErrors
                      }
                      handleFeetChange={this.handleFeetChange}
                      handleInchesChange={this.handleInchesChange}
                      handleCmChange={this.handleCmChange}
                    >
                      <FieldError
                        hasErrors={this.state.errors.height}
                        errorMsg="Height must be greater than 0"
                      />
                    </HeightInput>
                    <ActivitySelect
                      name="activityLevel"
                      handleErrors={this.handleErrors}
                      handleActivityLevelChange={this.handleActivityLevelChange}
                      hasErrors={this.state.errors.activityLevel}
                    >
                      <FieldError
                        hasErrors={this.state.errors.activityLevel}
                        errorMsg="Please select an activity level"
                      />
                    </ActivitySelect>
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
                  <div className="display">
                    <DisplayOutput
                      bmr={this.state.bmr}
                      tdee={this.state.tdee}
                    />
                  </div>
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

export default BmiCalculator;
