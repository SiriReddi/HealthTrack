import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MenuItemComponent from "../sidebar/MenuItemComponent";
import Slider from "./sliderpage";
import "./me.jpg";
const styles = StyleSheet.create({
  sidecontainer: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    width: 300,
    paddingTop: 0
    // height: "50%",
    // maxHeight: "50%"
  },
  containerMobile: {
    transition: "left 0.5s, right 0.5s",
    position: "absolute",
    width: 255,
    // height: "calc(100% - 32px)",
    zIndex: 901
  },
  mainsideContainer: {
    // height: "100%",
    // minHeight: "100vh"
  },
  mainContainerMobile: {
    position: "absolute",
    top: 0,
    left: 0
  },
  // mainContainerExpanded: {
  //   width: "100%",
  //   minWidth: "100vh"
  // },
  grid: {
    // marginTop: "10px",
    // marginBottom: "10px",
    // border: "1px solid lightpink",
    borderRadius: "10px",
    color: "lightgrey",
    marginRight: "18%"
  },
  // outsideLayer: {
  //   position: "absolute",
  //   width: "100vw",
  //   minWidth: "100%",
  //   height: "100%",
  //   backgroundColor: "rgba(0,0,0,.50)",
  //   zIndex: 900
  // },
  separator: {
    borderTop: "1px solid pink"
    // marginTop: 16,
    // marginBottom: 16,
    //opacity: 0.06
  },
  hide: {
    left: -255
  },
  show: {
    left: 0
  },
  wha: {
    display: "flex",
    // flex: "row",
    // marginTop: "8px",
    justifyContent: "center",
    marginLeft: "15px",
    height: "10px"
  },
  whatitle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px",
    marginLeft: "15px"
    // height: "10px",
    // flex: "row"
  },
  slider: {
    // display: "flex",
    // justifyContent: "center",
    //  marginTop: "15px",
    //    marginBottom: "20px",
    // marginLeft: "30px",
    // border: "1px solid pink",
    width: "auto",
    // border: "0.5px solid lightpink",
    borderRadius: "10px",
    color: "lightgrey"
  },
  image: {
    marginLeft: "20%",
    marginTop: "10%",
    marginBottom: "10%",
    borderRadius: "50%",
    border: "1px solid lightpink",
    width: "40%",
    height: "8%"
  },
  slid: {
    display: "flex",
    justifyItems: "center",
    marginLeft: "20%"
  },
  every: {
    marginLeft: "20%"
  }
});

class SidebarComponent extends React.Component {
  state = { expanded: false };

  //   onItemClicked = item => {
  //     this.setState({ expanded: false });
  //     return this.props.onChange(item);
  //   };

  isMobile = () => window.innerWidth <= 0;

  toggleMenu = () =>
    this.setState(prevState => ({ expanded: !prevState.expanded }));

  //   renderBurger = () => {
  //     return (
  //       <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
  //         {/* <IconBurger /> */}
  //       </div>
  //     );
  //   };

  render() {
    const { expanded } = this.state;
    // const isMobile = this.isMobile();
    return (
      <div style={{ position: "relative" }}>
        <Row
          className={css(styles.mainsideContainer)}
          // breakpoints={{
          //   768: css(
          //     styles.mainContainerMobile,
          //     expanded && styles.mainContainerExpanded
          //   )
          // }}
        >
          {/* {isMobile && !expanded && this.renderBurger()} */}
          <Column className={css(styles.sidecontainer)}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItemComponent title="LogOut" />
            </Link>
            <div>
              <img
                width="100"
                height="100"
                src={require("./me.jpg")}
                className={css(styles.image)}
              />
            </div>

            <Column className={css(styles.grid)}>
              <div className={css(styles.wha)}>
                <h5 className={css(styles.height)}> 5.6 F </h5>

                <h5 className={css(styles.weight)}> 123 Lb </h5>

                <h5 className={css(styles.age)}> 24 </h5>
              </div>
              <div className={css(styles.whatitle)}>
                <h5 className={css(styles.htitle)}> Height </h5>

                <h5 className={css(styles.wtitle)}> Weight </h5>

                <h5 className={css(styles.atitle)}> Age </h5>
              </div>
              {/* <div className={css(styles.separator)}></div> */}
            </Column>
            <Column className={css(styles.slider)}>
              <h4 className={css(styles.every)}> EveryDay Goals </h4>
              <h5> Sleep </h5>
              <Slider className={css(styles.slid)} />
              <h5> Water </h5>
              <Slider className={css(styles.slid)} />
            </Column>
          </Column>

          {/* {isMobile && expanded && (
            <div
              className={css(styles.outsideLayer)}
              onClick={this.toggleMenu}
            ></div>
          )} */}
        </Row>
      </div>
    );
  }
}

export default SidebarComponent;
