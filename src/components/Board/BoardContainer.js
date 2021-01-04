import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    width: "180px",
    height: "100px",
    backgroundColor: (props) => props.color
  },
  name: {
    fontWeight: "500",
    color: "#fff",
    textDecoration: "none"
  }
}));

export default function BoardContainer(props) {
  const { name, id } = props;
  const classes = useStyles(props);
  return (
    <Paper className={classes.root}>
      <Typography component={Link} to={`/${id}`} className={classes.name}>
        {name}
      </Typography>
    </Paper>
  );
}
