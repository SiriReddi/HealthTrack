import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
// import LineChart from "react-svg-line-chart";
import StackedChart from "../../stackedChart";
import Chart from "../../pchart";

const data = [];
for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

const styles = StyleSheet.create({
  container: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",

    cursor: "pointer",
    borderColor: "pink",
    borderRadius: 14,
    height: "30%",
    maxHeight: "40%"
  },
  graphContainer: {
    marginTop: 24,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    borderColor: "pink"
  },
  graphSection: {
    padding: 14,

    border: "1px solid pink",
    borderRadius: 10
  },
  graphSubtitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: "#9FA2B4",
    marginTop: 4,
    marginRight: 8
  },
  graphTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#252733"
  },
  legendTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: "15px",
    letterSpacing: "0.1px",
    color: "rgb(99,237,166)",
    marginLeft: 8
  },
  separator: {
    // backgroundColor: "rgb(99,237,166)",
    width: 15,
    minWidth: 15
  },
  // statContainer: {
  //   border: "1px solid rgb(99,237,166)",
  //   padding: "24px 32px 24px 32px"
  //   // height: "calc(114px - 48px)",
  //   // ":last-child": {
  //   //   border: "none"
  //   // }
  // },
  mealcontainer: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    borderRadius: 10,
    border: "1px solid pink",
    justifyContent: "center",
    width: "100px"
  },
  pie: {
    width: "5px",
    height: "5px"
  },
  stack: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    borderRadius: "10px",
    justifyContent: "center",
    marginLeft: "20px"
  },

  statValue: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: "0.3px",
    textAlign: "center",
    color: "#252733"
  }
});

class TodayTrendsComponent extends React.Component {
  render() {
    return (
      <Row
        flexGrow={1}
        className={css(styles.container)}
        horizontal="center"
        // breakpoints={{ 900: "column" }}
      >
        <Column
          wrap
          flexGrow={1}
          flexBasis="400px"
          className={css(styles.graphSection)}
          // breakpoints={{
          //   1024: { width: "calc(100% - 48px)", flexBasis: "auto" }
          // }}
        >
          {/* <Row wrap horizontal="space-between">
            <Column>
              <span className={css(styles.graphTitle)}></span>
              <span className={css(styles.graphSubtitle)}>
                as of 25 May 2019, 09:41 PM
              </span>
            </Column>
            {this.renderLegend("#3751FF", "Today")}
          </Row> */}
          <div className={css(styles.graphContainer)}>
            <StackedChart
              className={css(styles.stack)}
              data={data}
              viewBoxWidth={400}
              pointsStrokeColor="#3751FF"
              areaColor="#3751FF"
              areaVisible={true}
            />
          </div>
        </Column>
        <Column
          className={css(styles.separator)}
          // breakpoints={{ 1024: { display: "none" } }}
        >
          <div />
        </Column>
        <Column
          className={css(styles.mealcontainer)}
          flexGrow={3}
          flexBasis="100px"
          breakpoints={{ 1024: css(styles.stats) }}
        >
          <Chart className={css(styles.pie)} />
        </Column>
      </Row>
    );
  }
}

export default TodayTrendsComponent;
