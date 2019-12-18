import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import "./RowingMachine.svg";

const styles = StyleSheet.create({
  Rectcontainer: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    border: "1px solid pink",
    borderRadius: 20,
    cursor: "pointer",
    height: 70,
    width: "100%",
    maxWidth: "80%",
    marginTop: 5,
    padding: "10px",
    ":hover": {
      borderColor: "pink",
      ":nth-child(n) > span": {
        color: "rgb(99,237,166)"
      }
    }
  },
  cardimg: {
    horizontal: "right",
    vertical: "right",
    width: "100%",
    height: "110%",
    display: "flex",
    justifyItems: "center",
    marginLeft: "85%",
    marginBottom: "16%"
  },
  // name: {
  //   display: "flex",
  //   float: "right"
  // },
  tag: {
    display: "flex",
    color: "gray",
    lineSpacing: "1px",
    marginTop: "20%",
    marginRight: "60%",
    width: "30%",
    height: "20%"
  }
});

function MiniCardComponent({ className = "" }) {
  const composedClassName = `${css(styles.Rectcontainer)} ${className}`;
  return (
    <Column
      flexGrow={1}
      className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <Row className={css(styles.tag)}>
        Hello Sirisha
        <br></br>
        It is a great day to be fit
      </Row>

      <img
        className={css(styles.cardimg)}
        src={require("./RowingMachine.svg")}
        alt=""
      />
    </Column>
  );
}

export default MiniCardComponent;
