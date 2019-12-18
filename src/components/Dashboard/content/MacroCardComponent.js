import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import MacroLine from "../../macroline";

const styles = StyleSheet.create({
  container: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",

    border: "1px solid pink",
    borderRadius: 14,
    cursor: "pointer",
    height: 100,
    maxWidth: 320,
    marginTop: 20,
    padding: "10px 14px 10px 14px"
    // ":hover": {
    //   borderColor: "#3751FF",
    //   ":nth-child(n) > span": {
    //     color: "#3751FF"
    //   }
    // }
  },

  heartline: {
    justifyContent: "center",
    width: "20%",
    height: "20%"

    // display: "inline-block"
  }
});

function MacroCardComponent({ className = "" }, props) {
  const composedClassName = `${css(styles.container)} ${className}`;
  return (
    <Column
      flexGrow={1}
      className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <MacroLine className={css(styles.heartline)} />
      {/* {props.hrMax && (
        <FusionHeart className={css(styles.heartline)} Hr={props.hrMax} />
      )} */}
      {/* <HeartLine className={css(styles.heartline)} /> */}
      {/* <span className={css(styles.title)}>{title}</span>
      <span className={css(styles.value)}>{value}</span> */}
    </Column>
  );
}

export default MacroCardComponent;
