import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "../Dashboard/sidebar/SidebarComponent";
import HeaderComponent from "../Dashboard/header/HeaderComponent";
import ContentComponent from "../Dashboard/content/ContentComponent";
import RightSideComponent from "../Dashboard/rightsidebar/RightSideBarComponent";
import RectCardComponent from "../Dashboard/content/RectCardComponent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./index.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import FontAwesome from "react-fontawesome";
import ChartPie from "./../ChartsPie";

const styles = StyleSheet.create({
  cardUser: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    marginBottom: "25%",
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    justifyContent: "center",
    color: "white",
    borderRadius: "40px",
    border: "1px solid lightpink"
  },
  dash: {
    background: "fixed"
  },
  container: {
    display: "flex"
    // height: "100%",
    // minHeight: "100vh"
  },
  minicontent: {
    width: "100%",
    borderRadius: "30%",
    padding: "10px",
    marginTop: 5
  },
  contentside: {
    marginTop: 0,
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    width: "auto"
  },
  mainBlock: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    padding: 20,
    paddingRight: 10,
    width: "60%",
    maxWidth: "60%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  card: {
    marginTop: 11,
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    marginLeft: "20px"
  },
  button: {
    backgroundColor: "pink"
  },
  input: {
    display: "none"
  },
  divStyle: {
    padding: 14
  },
  infoButton: {
    minWith: 0
  },
  root: {
    flexGrow: 1,
    marginBottom: "5%",
    marginLeft: "40%",
    justifyContent: "center"
  },
  gridContainer: {
    marginTop: 2
  },
  paper: {
    textAlign: "center"
  },
  waterButton: {
    backgroundColor: "Pink"
  },
  nutritionButton: {
    backgroundColor: "pink"
  },
  exerciseButton: {
    backgroundColor: "pink"
  },
  weightButton: {
    backgroundColor: "#4d66f08a"
  },

  waterAvatar: {
    backgroundColor: "pink",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },
  NutritionAvatar: {
    backgroundColor: "lightblue",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },
  exerciseAvatar: {
    backgroundColor: "pink",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },
  BmiAvatar: {
    backgroundColor: "lightblue",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },
  macroAvatar: {
    backgroundColor: "pink",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },
  thrAvatar: {
    backgroundColor: "lightblue",
    width: "46px",
    height: "46px",
    margin: "5%",
    marginLeft: "17%"
  },

  tableCellStyle: {
    padding: 0
  },
  table: {
    marginLeft: "150px"
  },
  info: {
    marginBottom: "4%",
    marginTop: "7%"
    // marginLeft: "30%"
  },
  nameTitle: {
    marginTop: "8%"
  }
});

class MacroDashboard extends React.Component {
  state = { selectedItem: "Goals" };
  render() {
    const { selectedItem } = this.state;
    const { classes } = this.props;
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
              <Card className={css(styles.cardUser)}>
                <CardContent>
                  <Typography
                    className={css(styles.root)}
                    variant="display3"
                    alignContent="center"
                  >
                    DashBoard
                  </Typography>
                  <Grid container spacing={0}>
                    {/* <Grid item xs={12} sm={6}>
                <ChartPie
                  waterChart={this.props.water}
                  nutritionChart={this.props.nutrition}
                  exerciseChart={this.props.exercise}
                />
              </Grid> */}
                    <Grid item xs={12} sm={6}>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                        align="center"
                        className={classes.nameTitle}
                      >
                        {this.props.firstName} {this.props.lastName}
                      </Typography>
                      <Typography className={css(styles.info)}>
                        All your daily Health Tracking Information is displayed
                        below. Click on the icons to access the goal pages
                      </Typography>
                      <Table className={css(styles.table)}>
                        <TableBody>
                          {/* <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              Water (Cups)
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.water}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip
                                title="Go to Water Page"
                                placement="right"
                              >
                                <Link
                                  to="/water"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar className={css(styles.waterAvatar)}>
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "pink"
                                      }}
                                      href="/water"
                                    >
                                      <FontAwesome
                                        classNames="fas fa-tint"
                                        name="rocket"
                                        size="lg"
                                        style={{
                                          textShadow: "pink"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow> */}
                          <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              Nutrition (Points)
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.nutrition}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip
                                title="Go to Nutrition Page"
                                placement="right"
                              >
                                <Link
                                  to="/Food-Dairy"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar
                                    className={css(styles.NutritionAvatar)}
                                  >
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "pink"
                                      }}
                                      href="/Food-Dairy"
                                    >
                                      <FontAwesome
                                        className="fas fa-utensils"
                                        size="lg"
                                        style={{
                                          textShadow:
                                            "0 1px 0 rgba(0, 0, 0, 0.1)"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              Exercise (Duration)
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.exercise}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip
                                title="Go to Exercise Page"
                                placement="right"
                                variant="body2"
                              >
                                <Link
                                  to="/Exercise"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar
                                    className={css(styles.exerciseAvatar)}
                                  >
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "pink"
                                      }}
                                      href="/Exercise"
                                    >
                                      <FontAwesome
                                        className="fas fa-dumbbell"
                                        size="lg"
                                        style={{
                                          textShadow:
                                            "0 1px 0 rgba(0, 0, 0, 0.1)"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              BMI Calculator
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.nutrition}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip title="Go to BMI Page" placement="right">
                                <Link
                                  to="/Bmi-Calculator"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar className={css(styles.BmiAvatar)}>
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "lightblue"
                                      }}
                                      href="/Bmi-Calculator"
                                    >
                                      <FontAwesome
                                        className="fas fa-utensils"
                                        size="lg"
                                        style={{
                                          textShadow: "lightblue"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              Macros
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.nutrition}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip
                                title="Go to Nutrition Page"
                                placement="right"
                              >
                                <Link
                                  to="/macros"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar className={css(styles.macroAvatar)}>
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "pink"
                                      }}
                                      href="/macros"
                                    >
                                      <FontAwesome
                                        className="fas fa-utensils"
                                        size="lg"
                                        style={{
                                          textShadow:
                                            "0 1px 0 rgba(0, 0, 0, 0.1)"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              Target Heart Rate
                            </TableCell>
                            <TableCell
                              className={classes.tableCellStyle}
                              variant="body2"
                            >
                              {this.props.nutrition}
                            </TableCell>
                            <TableCell className={classes.tableCellStyle}>
                              <Tooltip
                                title="Go to Nutrition Page"
                                placement="right"
                              >
                                <Link
                                  to="/target-heart-rate"
                                  style={{
                                    textDecoration: "none",
                                    color: "white"
                                  }}
                                >
                                  <Avatar className={css(styles.thrAvatar)}>
                                    <a
                                      style={{
                                        textDecoration: "none",
                                        color: "lightblue"
                                      }}
                                      href="/target-heart-rate"
                                    >
                                      <FontAwesome
                                        className="fas fa-utensils"
                                        size="lg"
                                        style={{
                                          textShadow: "lightblue"
                                        }}
                                      />
                                    </a>
                                  </Avatar>
                                </Link>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
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

MacroDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MacroDashboard);
