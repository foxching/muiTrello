import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    alignItems: "center"
  }
}));

export default function Card({ card }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography>{card.title}</Typography>
    </Paper>
  );
}
