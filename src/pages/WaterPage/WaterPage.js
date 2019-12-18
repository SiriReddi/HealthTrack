import React, { Component } from "react";
import WaterGoalCard from "../../components/WaterGoalCard";
import { Redirect } from "react-router-dom";
import axios from "axios";
import moment from "moment";

class WaterGoal extends Component {
  state = {
    redirect: false,
    glasses: 0,
    currentDayId: "",
    updatedWater: 0,
    quantities: [],
    dates: []
  };

  renderRedirect = () => {
    if (!localStorage.getItem("jwtToken")) {
      return <Redirect to="/" />;
    }
  };

  getWater = () => {
    // Sets the url to query
    let url = `http://localhost:3001/api/healthtracker/getDays/${localStorage.getItem(
      "userId"
    )}`;

    // Sets the Authorization request header
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    axios
      .get(url)
      .then(res => {
        let data = res.data;
        console.log("res", res);
        let waterQuantities = [];
        let datesArr = [];

        for (let i = data.length - 1; i > -1; i--) {
          waterQuantities.push(data[i].water);
          datesArr.push(moment(data[i].date).format("MM/DD/YYYY"));
        }
        console.log("data", data);
        this.setState({
          glasses: data[0].water,
          currentDayId: data[0]._id,
          quantities: waterQuantities,
          dates: datesArr
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addGlass(number) {
    let arr = this.state.quantities;
    let newTotal = this.state.glasses + number;

    arr.splice(-1, 1);
    arr.push(newTotal);

    this.setState({ glasses: this.state.newTotal, quantities: arr }, () => {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "jwtToken"
      );
      axios
        .post("http://localhost:3001/api/healthTracker/newWater", {
          water: this.state.glasses,
          id: this.state.currentDayId
        })
        .then(data => data)
        .catch(err => {
          console.log(err);
        });
    });
  }

  handleChange(e) {
    this.setState({ updatedWater: parseInt(e.target.value) });
    console.log("updating water:", parseInt(e.target.value));
  }

  handleClick() {
    if (!this.state.updatedWater) {
      console.log("no updatewater");
      return;
    } else {
      let arr = this.state.quantities;
      console.log("inside else:", arr.length);
      arr.splice(-1, 1);
      arr.push(this.state.updatedWater);
      let value = this.state.glasses + this.state.updatedWater;
      console.log("updatewate var", value);
      this.setState({ glasses: value }, this.postToDatabase());
    }
  }

  postToDatabase = () => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .post("http://localhost:3001/api/healthTracker/newWater", {
        water: this.state.glasses,
        id: this.state.currentDayId
      })
      .then(data => console.log("data2", data))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <WaterGoalCard
          addGlass={this.addGlass.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleClick={this.handleClick.bind(this)}
          glasses={this.state.glasses}
          quantities={this.state.quantities}
          dates={this.state.dates}
        />
      </div>
    );
  }
}

export default WaterGoal;
