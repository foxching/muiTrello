import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    width: "180px",
    height: "100px",
    backgroundColor: fade("#EBECF0", 0.25),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: "12px",
    color: "#000"
  }
}));

export default function BoardInput(props) {
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <div />
      <Typography
        className={classes.name}
        onClick={() => props.handleClickOpen(true)}
      >
        Create new Board
      </Typography>
    </Paper>
  );
}
