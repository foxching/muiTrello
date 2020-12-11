import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    height: "55px",
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
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
