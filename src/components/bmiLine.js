import React, { Component } from "react";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";

ReactFC.fcRoot(FusionCharts, charts, Widgets, FusionTheme);

// Resolves charts dependancy
charts(FusionCharts);

class BmiLine extends React.Component {
  render() {
    const dataSource = {
      chart: {
        caption: "BMI Line",
        numberprefix: "",
        bgColor: "pink",
        lineColor: "pink",
        charttopmargin: "20",
        theme: "fusion",
        showclosevalue: "1",
        showopenvalue: "1",
        setadaptiveymin: "1"
      },
      dataset: [
        {
          data: [
            {
              tooltext: "",
              value: 23
            },
            {
              tooltext: "",
              value: 40
            },
            {
              tooltext: "",
              value: 19
            },
            {
              tooltext: "",
              value: 25
            },
            {
              tooltext: "",
              value: 35
            },
            {
              tooltext: "",
              value: 40
            }
          ]
        }
      ]
    };
    return (
      <ReactFusioncharts
        type="sparkline"
        width="14%"
        height="14%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default BmiLine;
