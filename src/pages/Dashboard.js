import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SidebarComponent from "../components/Dashboard/sidebar/SidebarComponent";
import HeaderComponent from "../components/Dashboard/header/HeaderComponent";
import ContentComponent from "../components/Dashboard/content/ContentComponent";
import RightSideComponent from "../components/Dashboard/rightsidebar/RightSideBarComponent";
import RectCardComponent from "../components/Dashboard/content/RectCardComponent";

// import "./App.css";

const styles = StyleSheet.create({
  dash: {
    background: "fixed",
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)"
  },
  container: {
    display: "flex",
    height: "5%",
    // minHeight: "100vh",
    maxHeight: "10%"
  },
  minicontent: {
    width: "100%",
    borderRadius: "30%",
    padding: "10px",
    marginTop: 5,
    height: "5%",
    maxHeight: "10%"
  },
  content: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)"
  },
  contentside: {
    marginTop: 0,
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    width: "auto"
    // height: "5%",
    // maxHeight: "10%"
  },
  mainBlock: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",

    padding: 20,
    paddingRight: 10,
    width: "60%",
    maxWidth: "60%",
    height: "5%",
    maxHeight: "10%"
  }
});

class DashboardPage extends React.Component {
  state = { selectedItem: "Dashboard" };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => this.forceUpdate();

  render() {
    const { selectedItem } = this.state;
    return (
      <div className={css(styles.dash)}>
        <Row className={css(styles.container)}>
          <SidebarComponent
            selectedItem={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
          <Column flexGrow={1} className={css(styles.mainBlock)}>
            <HeaderComponent title={selectedItem} />
            <div className={css(styles.minicontent)}>
              <RectCardComponent />
            </div>

            <div className={css(styles.content)}>
              <ContentComponent />
            </div>
          </Column>
          <div className={css(styles.contentside)}>
            <RightSideComponent />
          </div>
        </Row>
      </div>
    );
  }
}

export default DashboardPage;
