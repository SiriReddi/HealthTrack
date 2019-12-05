import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class HeartLine extends Component {
  renderChart() {
    const chartData = {
      labels: [
        "90",
        "100",
        "110",
        "120",
        "130",
        "140",
        "150",
        "160",
        "170",
        "190",
        "200"
      ],

      datasets: [
        {
          strokeColor: "rgba(100, 190, 154, 1)",
          data: this.props.MaxHR,
          backgroundColor: "rgba(130, 94, 185, 0.7098039215686275)"
        }
      ],
      options: {
        responsive: false,
        maintainAspectRatio: false,
        title: {
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
        <Line
          justify="center"
          data={chartData}
          //   options={{
          //     elements: {
          //       display: false
          //     }
          //   }}
        />
      </div>
    );
  }

  render() {
    return this.renderChart();
  }
}

export default HeartLine;
