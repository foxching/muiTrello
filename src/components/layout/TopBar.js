import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  appbar: {
    // minHeight: "6vh",
    height: "44px",
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  iconContainer: {
    background: "rgb(255,255,255, 0.4)",
    padding: "6px 6px 6px 6px",
    borderRadius: "3px",
    marginTop: "5px",
    marginBottom: "10px",
    marginLeft: "5px",
    "&:hover": {
      background: fade("#fff", 0.25)
    }
  },
  icon: {
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "inline-flex",
    verticalAlign: "top"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(0, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(0)}px)`,
    //transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch"
      // "&:focus": {
      //   width: "20ch"
      // }
    }
  },
  title: {
    flexGrow: 0.4
  },
  title2: {
    flexGrow: 0.6
  }
}));
export default function TopBar({ open, setOpen }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar
          component="nav"
          style={{ height: "10px" }}
          variant="dense"
          disableGutters={true}
        >
          <Box className={classes.iconContainer}>
            <Icon className={classes.icon}>drag_indicator</Icon>
          </Box>
          <Hidden xsDown>
            <Box className={classes.iconContainer}>
              <Link to="/">
                <Icon className={classes.icon}>home</Icon>
              </Link>
            </Box>
          </Hidden>
          <Box className={classes.iconContainer}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              <Icon className={classes.icon}>dashboard</Icon>
              <Hidden xsDown>
                <span
                  style={{
                    margin: "5px",
                    lineHeight: "15px",
                    color: "#fff",
                    textDecoration: "none"
                  }}
                >
                  Boards
                </span>
              </Hidden>
            </Link>
          </Box>
          <Box className={classes.iconContainer}>
            <Icon className={classes.icon}>search</Icon>
            <Hidden xsDown>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Hidden>
          </Box>
          <div className={classes.title} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              style={{
                color: "#fff",
                fontSize: "30px",
                cursor: "pointer",
                marginBottom: "10px"
              }}
            >
              dashboard
            </Icon>
            <Typography
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: "26px",
                color: "#fff",
                marginTop: "5px",
                marginBottom: "10px"
              }}
            >
              Trello
            </Typography>
          </div>

          <div className={classes.title2} />
          <Box className={classes.iconContainer}>
            <Icon className={classes.icon}>add</Icon>
          </Box>
          <Hidden xsDown>
            <Box className={classes.iconContainer}>
              <Icon className={classes.icon}>info</Icon>
            </Box>
          </Hidden>
          <Box className={classes.iconContainer}>
            <Icon className={classes.icon}>notifications</Icon>
          </Box>
          <Box
            className={classes.iconContainer}
            style={{ marginRight: "3px" }}
            onClick={() => setOpen(true)}
          >
            <Icon className={classes.icon}>face</Icon>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
