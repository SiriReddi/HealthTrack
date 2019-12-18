import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import "./RowingMachine.svg";

const styles = StyleSheet.create({
  Rectcontainer: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    border: "1px solid pink",
    borderRadius: 20,
    cursor: "pointer",
    height: 80,
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
    height: "160%",
    display: "flex",
    justifyItems: "center",
    marginLeft: "83%"
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
      <img
        className={css(styles.cardimg)}
        src={require("./RowingMachine.svg")}
        alt=""
      />
    </Column>
  );
}

export default MiniCardComponent;
