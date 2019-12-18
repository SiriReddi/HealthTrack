import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./index.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    margin: "30% 4% -1% 4%",
    color: "gray",
    border: "0.5px solid lightpink",
    borderRadius: "20px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  multilineColor: {
    color: "pink"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    color: "gray"
  },
  expansionPanelStyle: {
    margin: 11
  },
  rootList: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    // position: 'relative',
    // overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  header: {
    marginBottom: "-4%"
  },
  formRoot: {
    display: "flex",
    flexWrap: "wrap",
    color: "pink"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    color: "gray"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    textAlign: "center",
    color: "pink",
    borderRadius: "20px"
  },
  workout: {
    color: "pink"
  },
  cell: {
    color: "pink"
  },

  progressColor: {
    backgroundColor: "#825eb9b5",
    marginLeft: "19%",
    marginRight: "19%",
    marginBottom: "28px",
    marginTop: "19px",
    padding: "4px"
  },
  info: {
    margin: "3% 2% 0% 2%"
  },
  input: {
    color: "pink"
  },
  body: {
    color: "secondary"
  },
  MuiTableCellbody: {
    color: "pink"
  }
  // graphPaper: {
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  //   margin: "5% 4% 16% 4%"
  // }
});

class ExerciseGoalCard extends React.Component {
  renderTableRows(arr) {
    return arr.map(element => {
      return (
        <TableRow>
          <TableCell className={this.props.classes.cell}>
            {element.exercise}
          </TableCell>
          <TableCell className={this.props.classes.cell}>
            {element.duration} Minutes
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography
                className={classes.header}
                variant="display1"
                align="center"
              >
                Exercise Tracker
              </Typography>
              <Paper className={classes.progressColor}>
                <Typography align="center" variant="body2">
                  Current Progress: {this.props.totalActivity} mins
                </Typography>
              </Paper>

              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <form
                    align="center"
                    className={classes.formRoot}
                    autoComplete="off"
                  >
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel className={classes.workout}>
                        Workouts
                      </InputLabel>
                      <Select
                        className={classes.input}
                        value={this.props.activity}
                        onChange={this.props.handleExerciseChange}
                        inputProps={{ name: "activity", id: "workout-simple" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Walking"}>Walking</MenuItem>
                        <MenuItem value={"Jogging"}>Jogging</MenuItem>
                        <MenuItem value={"Running"}>Running</MenuItem>
                        <MenuItem value={"Swimming"}>Swimming</MenuItem>
                        <MenuItem value={"Cycling"}>Cycling</MenuItem>
                        <MenuItem value={"Yoga"}>Yoga</MenuItem>
                        <MenuItem value={"HIIT"}>HIIT</MenuItem>
                        <MenuItem value={"Strength Training"}>
                          Strength Training
                        </MenuItem>
                        <MenuItem value={"stairStepper"}>
                          Stair Stepper
                        </MenuItem>
                        <MenuItem value={"boxing"}>Boxing</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                      </Select>
                      <FormHelperText className={classes.input}>
                        Select the workout and duration
                      </FormHelperText>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  ></form>
                </Grid>
                <Grid item xs={12}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addMinutes"
                      label="Enter Minutes"
                      InputLabelProps={{
                        classes: {
                          root: classes.multilineColor
                        }
                      }}
                      value={this.props.minutes}
                      onChange={this.props.handleDurationChange}
                      InputProps={{
                        classes: {
                          input: classes.multilineColor
                        }
                      }}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="minutes"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid className={classes.submit} item xs={12}>
                  <Button
                    onClick={this.props.addExercise}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1} id="exerciseCard">
              <Typography
                variant="display1"
                className={classes.heading}
                align="center"
              >
                Today
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.cell}>Exercises</TableCell>
                    <TableCell className={classes.cell}>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  className={classes.body}
                  InputProps={{
                    classes: {
                      input: classes.multilineColor
                    }
                  }}
                >
                  {this.renderTableRows(this.props.todaysActivities)}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ExerciseGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExerciseGoalCard);
