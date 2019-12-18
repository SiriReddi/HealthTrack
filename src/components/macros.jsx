import React, { Component } from "react";
import SingleInput from "./input-fields/SingleInput";
import FieldError from "./input-fields/FieldError";
import DisplayOutput from "./display-output/DisplayOutput";
import FormValidation from "../utilities/FormValidation";
import PercentsValid from "../utilities/PercentsValid";
import CalorieCalc from "../utilities/CalorieCalc";
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
    color: "lightgray"
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
class Macros extends Component {
  constructor(props) {
    super();
    this.state = {
      calories: "",
      proteinPercent: "",
      proteinGrams: "",
      carbsPercent: "",
      carbsGrams: "",
      fatPercent: "",
      fatGrams: "",
      totalPercentValid: false,
      errors: {
        calories: false,
        proteinPercent: false,
        carbsPercent: false,
        fatPercent: false
      }
    };
  }
  handleCaloriesChange = event => {
    if (this.state.errors[event.target.name] === true) {
      this.handleErrors(event);
    }
    this.setState({ calories: event.target.value });
  };
  handleMacroPercentageChange = event => {
    this.setState({ [event.target.name]: event.target.value }, function() {
      this.setState({
        totalPercentValid: PercentsValid(
          parseFloat(this.state.carbsPercent),
          parseFloat(this.state.proteinPercent),
          parseFloat(this.state.fatPercent)
        )
      });
    });
  };
  handleErrors = event => {
    const hasError = FormValidation(event.target.name, event.target.value);
    this.setState({
      errors: { ...this.state.errors, [event.target.name]: hasError }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const result = CalorieCalc.PercentMacrosToGrams(
      parseFloat(this.state.calories),
      parseFloat(this.state.carbsPercent),
      parseFloat(this.state.proteinPercent),
      parseFloat(this.state.fatPercent)
    );
    this.setState({
      carbsGrams: result.carbsGrams,
      proteinGrams: result.proteinGrams,
      fatGrams: result.fatGrams
    });
  };
  canBeSubmitted = () => {
    let toggle = false;
    const errObjVals = Object.keys(this.state.errors).map(
      key => this.state.errors[key]
    );
    const errObjHasErr = errObjVals.find(val => {
      return val;
    });
    if (errObjHasErr == null) {
      toggle = true;
    }
    return toggle && this.state.totalPercentValid;
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
              <h2 className={css(styles.heading)}>Macronutrient Calculator</h2>
              <p className="lead">
                Macronutrients are the three groups all foods are divided into:
                carbohydrates, fats, and protein. Depending on your dietary
                needs, your macronutrient percentages could be very different
                while your calories stay the same. Someone on the{" "}
                <a href="https://www.amazon.com/Ketogenic-Cookbook-Nutritious-Low-Carb-High-Fat/dp/1628600780/ref=as_li_ss_tl?s=sporting-goods&ie=UTF8&qid=1494310956&sr=8-1&keywords=ketogenic&linkCode=ll1&tag=createahomegy-20&linkId=4e645b6e05d6699b64ce2b3402c46dd9">
                  ketogenic diet
                </a>
                , for example, will have very high fat, moderate protein, and
                very low carbohydrate percentages, while someone following a
                diet like Renaissance Periodization could be eating the same
                amount of total calories but have low fat, high protein, and
                moderate carbohydrates.
              </p>

              <div className="row">
                <div className="col-sm-6">
                  <form
                    className="form-horizontal clearfix bottom-buffer"
                    onSubmit={this.handleSubmit}
                  >
                    <h4>The total number of calories you want to eat daily:</h4>
                    <SingleInput
                      label="Calories"
                      inputType="number"
                      name="calories"
                      hasErrors={this.state.errors.calories}
                      value={this.state.calories}
                      width="80px"
                      handleChange={this.handleCaloriesChange}
                      handleErrors={this.handleErrors}
                    >
                      <FieldError
                        hasErrors={this.state.errors.calories}
                        errorMsg="Calories must be greater than 0"
                      />
                    </SingleInput>
                    <h4>The macro percentages you want:</h4>
                    <SingleInput
                      label="Carbs"
                      inputType="number"
                      name="carbsPercent"
                      hasErrors={this.state.errors.carbsPercent}
                      value={this.state.carbsPercent}
                      width="80px"
                      handleChange={this.handleMacroPercentageChange}
                      handleErrors={this.handleErrors}
                    >
                      <FieldError
                        hasErrors={this.state.errors.carbsPercent}
                        errorMsg="Percentage of carbohydrates must be 0 or greater and less than 101"
                      />
                    </SingleInput>
                    <SingleInput
                      label="Protein"
                      inputType="number"
                      name="proteinPercent"
                      hasErrors={this.state.errors.proteinPercent}
                      value={this.state.proteinPercent}
                      width="80px"
                      handleChange={this.handleMacroPercentageChange}
                      handleErrors={this.handleErrors}
                    >
                      <FieldError
                        hasErrors={this.state.errors.proteinPercent}
                        errorMsg="Percentage of protein must be 0 or greater and less than 101"
                      />
                    </SingleInput>
                    <SingleInput
                      label="Fat"
                      inputType="number"
                      name="fatPercent"
                      hasErrors={this.state.errors.fatPercent}
                      value={this.state.fatPercent}
                      width="80px"
                      handleChange={this.handleMacroPercentageChange}
                      handleErrors={this.handleErrors}
                    >
                      <FieldError
                        hasErrors={this.state.errors.fatPercent}
                        errorMsg="Percentage of fat must be 0 or greater and less than 101"
                      />
                    </SingleInput>
                    <FieldError
                      hasErrors={!this.state.totalPercentValid}
                      errorMsg="All the percentages must equal 100"
                    />
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
                  <div className="piedisplay">
                    <DisplayOutput
                      carbsGrams={this.state.carbsGrams}
                      proteinGrams={this.state.proteinGrams}
                      fatGrams={this.state.fatGrams}
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

export default Macros;
