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
          data: [20, 40, 40],
          backgroundColor: ["lightpink", "lightpurple", "lightgreen"],
          width: "58px",
          height: "80px"
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
