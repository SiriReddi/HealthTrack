import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class HeartLine extends Component {
  renderChart(props) {
    const chartData = {
      data: {
        labels: ["Hr"],

        datasets: [
          {
            strokeColor: "rgba(100, 190, 154, 1)",
            data: [this.props.hrMax],
            backgroundColor: "rgba(130, 94, 185, 0.7098039215686275)"
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        elements: {
          line: {
            borderColor: "#000000",
            borderWidth: 1
          },
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        }
      }
    };
    console.log("chart ", chartData);
    return (
      <div className="Chart-container">
        <Line justify="center" data={chartData} />
      </div>
    );
  }

  render(props) {
    return this.renderChart();
  }
}

export default HeartLine;
