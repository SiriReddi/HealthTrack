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

class MacroLine extends React.Component {
  render() {
    const dataSource = {
      chart: {
        caption: "Macro Line",
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
              value: 60
            },
            {
              tooltext: "",
              value: 20
            },
            // {
            //   tooltext: "",
            //   value: 40
            // },
            // {
            //   tooltext: "",
            //   value: 130
            // },
            // {
            //   tooltext: "",
            //   value: 75
            // },
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

export default MacroLine;
