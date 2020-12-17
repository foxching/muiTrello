import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "55px",
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  title: {
    flexGrow: 1
  },
  btn: {
    color: "#fff",
    backgroundColor: "#000",
    margin: 0
  }
}));
export default function TopBar({ open, setOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          TRELLO
        </Typography>
        <Button
          color="inherit"
          className={classes.btn}
          onClick={() => setOpen(!open)}
        >
          Change Background
        </Button>
      </Toolbar>
    </AppBar>
  );
}
