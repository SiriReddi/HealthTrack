import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Exercise Tracker",
    yaxisname: "",
    subcaption: "",
    bgColor: "pink",

    plottooltext:
      "$label minutes <b>$dataValue</b> of Exercise from $seriesName",
    showsum: "0",
    theme: "fusion",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "Mon"
        },
        {
          label: "Tue"
        },
        {
          label: "Wed"
        },
        {
          label: "Thu"
        },
        {
          label: "Fri"
        },
        {
          label: "Sat"
        },
        {
          label: "Sun"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Jogging",
      data: [
        {
          value: "30"
        },
        {
          value: "120"
        },
        {
          value: "40"
        },
        {
          value: "100"
        },
        {
          value: "90"
        },
        {
          value: "30"
        },
        {
          value: "60"
        }
      ]
    },
    {
      seriesname: "Walking",
      data: [
        {
          value: "40"
        },
        {
          value: "20"
        },
        {
          value: "60"
        },
        {
          value: "60"
        },
        {
          value: "20"
        },
        {
          value: "40"
        },
        {
          value: "5"
        }
      ]
    },
    {
      seriesname: "Running",
      data: [
        {
          value: "35"
        },
        {
          value: "62"
        },
        {
          value: "41"
        },
        {
          value: "37"
        },
        {
          value: "72"
        },
        {
          value: "31"
        }
      ]
    },
    {
      seriesname: "Swimming",
      data: [
        {
          value: "21"
        },
        {
          value: "40"
        },
        {
          value: "45"
        },
        {
          value: "18"
        },
        {
          value: "57"
        },
        {
          value: "27"
        }
      ]
    },
    {
      seriesname: "Hiit",
      data: [
        {
          value: "18"
        },
        {
          value: "33"
        },
        {
          value: "23"
        },
        {
          value: "16"
        },
        {
          value: "44"
        },
        {
          value: "35"
        }
      ]
    },
    {
      seriesname: "Dance",
      data: [
        {
          value: "60"
        },
        {
          value: "40"
        },
        {
          value: "30"
        },
        {
          value: "50"
        },
        {
          value: "30"
        },
        {
          value: "50"
        }
      ]
    }
  ]
};

class StackedChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="stackedcolumn3d"
        progresbarRadius="10%"
        justifyContent="Center"
        margin-left="10%"
        width="90%"
        height="60%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default StackedChart;
