import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "./piechart.css";

class Chart extends Component {
  renderChart() {
    const chartData = {
      labels: ["Carbs", "Protein", "Fat"],

      datasets: [
        {
          strokeColor: "rgba(100, 190, 154, 1)",
          data: [this.props.Carbs, this.props.Protein, this.props.Fat],
          backgroundColor: [
            "#63c5e4",
            "rgba(130, 94, 185, 0.7098039215686275)",
            "rgba(16, 149, 59, 0.7215686274509804)"
          ]
        }
      ],
      options: {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false
        },
        legend: {
          display: false,
          position: "bottom"
        }
      },
      segmentShowStroke: true
    };
    console.log("chart ", chartData);
    return (
      <div className="Chart-container">
        <Pie
          justify="center"
          data={chartData}
          options={{
            legend: {
              display: true
            }
          }}
        />
      </div>
    );
  }

  render() {
    return this.renderChart();
  }
}

export default Chart;
