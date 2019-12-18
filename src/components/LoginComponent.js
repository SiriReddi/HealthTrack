import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CardMedia } from "@material-ui/core";
import login from "./login.jpg";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    margin: "10%",
    marginTop: "25%",
    width: "30%",
    borderRadius: "10%",
    background: "lightcream",
    border: "0.5em solid lightblue",
    zindex: "9999"
  },

  body: {
    display: "flex",
    backgroundImage: `url(${login})`,
    backgroundSize: "cover",
    height: "100%"
  },
  margin: {
    margin: theme.spacing.unit
  },
  buttonStyle: {
    paddingBottom: "6%"
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <Paper className={classes.root} elevation={1} justify="center">
          <Typography variant="headline" component="h3" align="center">
            Log In
          </Typography>
          <h4>{this.props.message}</h4>
          <TextField
            id="username"
            label="Username (required)"
            className={classes.textField}
            margin="normal"
            fullWidth
            onChange={this.props.usernameAction}
          />
          <Tooltip title="Case Sensitive">
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              onChange={this.props.passwordAction}
            />
          </Tooltip>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3} className={classes.buttonStyle}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={this.props.submitAction}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                href="/signup"
              >
                SignUp
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Incorrect Username or Password"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please try again
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
