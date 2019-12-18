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

class FusionHeart extends React.Component {
  render() {
    const dataSource = {
      chart: {
        caption: "Heart Line",
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
              value: 80
            },
            {
              tooltext: "",
              value: 190
            },
            {
              tooltext: "",
              value: 60
            },
            {
              tooltext: "",
              value: 130
            },
            {
              tooltext: "",
              value: 75
            },
            {
              tooltext: "",
              value: 160
            }
          ]
        }
      ]
    };
    return (
      <ReactFusioncharts
        type="sparkline"
        width="15%"
        height="19%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default FusionHeart;
