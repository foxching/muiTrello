import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    width: "180px",
    height: "100px",
    backgroundColor: ({ color }) => color,
    cursor: "pointer"
  },
  label: {
    fontWeight: "normal",
    color: "#fff",
    fontSize: "1em",
    textDecoration: "none"
  }
}));

export default function BoardThumbnail(props) {
  const { name, id } = props.board;
  const classes = useStyles(props.board);
  return (
    <Paper className={classes.root}>
      <Typography
        component={Link}
        to={`/board/${id}`}
        className={classes.label}
      >
        {name}
      </Typography>
    </Paper>
  );
}
