import React from "react";
import "./DisplayOutput.css";
import Chart from "../pieChart";
// import HeartLine from "../heartLine";

function DisplayOutput(props) {
  return (
    <div className="text-center">
      {props.tdee && (
        <div className="result-block mod-tdee">
          <h4>Total Daily Energy Expenditure:</h4>
          <h1>
            {props.tdee} {props.bmr && "calories"}
          </h1>
          <p>
            The calories your body will burn in a day based on your activity
            level.
          </p>
        </div>
      )}
      {props.bmr && (
        <div className="result-block mod-bmr">
          <h4>Basal Metabolic Rate:</h4>
          <h1>
            {props.bmr} {props.bmr && "calories"}
          </h1>
          <p>
            Even without leaving bed, your body will burn this many calories in
            a day.
          </p>
        </div>
      )}
      {/* {props.max && (
        <div className="result-block mod-max">
          <h4>One Rep Max:</h4>
          <h1>
            {props.max} {props.units === "imperial" && "lb"}{" "}
            {props.units === "metric" && "kg"}
          </h1>
          <p>Your calculated one-rep max.</p>
        </div>
      )} */}
      {props.carbsGrams && (
        <div className="result-block mod-macros">
          <Chart
            Carbs={props.carbsGrams}
            Protein={props.proteinGrams}
            Fat={props.fatGrams}
          />
          <div className="grams">
            <h5>Carbs: {props.carbsGrams}g</h5>
            <h5>Protein: {props.proteinGrams}g</h5>
            <h5>Fat: {props.fatGrams}g</h5>
          </div>
          {/* <h4>Macros:</h4>
          <h1>Carbs: {props.carbsGrams} g</h1>
          <h1>Protein: {props.proteinGrams} g</h1>
          <h1>Fat: {props.fatGrams} g</h1>
          <p>Your calculated macronutrient amounts.</p> */}
        </div>
      )}
      {props.hrMax && (
        <div className="result-block mod-hr">
          <h4>Target Heart Rate:</h4>
          <h5>Max HR: {props.hrMax} bpm</h5>
          {/* <HeartLine MaxHR={props.hrMax} /> */}
          <p>Your calculated max heartrate.</p>
        </div>
      )}
    </div>
  );
}

export default DisplayOutput;
