import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import MiniCardComponent from "./MiniCardComponent";
import TodayTrendsComponent from "./TodayTrendsComponent";
import HeartLine from "../../heartLine";

const styles = StyleSheet.create({
  // cardsContainer: {
  //   marginRight: -30,
  //   marginTop: -30
  // },
  cardRow: {
    marginTop: 20,
    "@media (max-width: 768px)": {
      marginTop: 0
    }
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none"
    }
  },
  todayTrends: {
    marginTop: 20
  },
  lastRow: {
    marginTop: 30
  }
});

function ContentComponent() {
  return (
    <Column>
      <div className={css(styles.todayTrends)}>
        <TodayTrendsComponent />
      </div>
      <Row
        className={css(styles.cardsContainer)}
        wrap
        flexGrow={1}
        horizontal="space-between"
        breakpoints={{ 768: "column" }}
      >
        <Row
          className={css(styles.cardRow)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          // breakpoints={{ 384: "column" }}
        >
          <MiniCardComponent className={css(styles.miniCardContainer)} />
          <MiniCardComponent className={css(styles.miniCardContainer)} />

          <MiniCardComponent className={css(styles.miniCardContainer)} />
        </Row>
      </Row>
    </Column>
  );
}

export default ContentComponent;
