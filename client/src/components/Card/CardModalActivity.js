import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineIcon from "@material-ui/icons/Timeline";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "15px",
    color: "#9e9e9e"
  },
  headTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000"
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: "3px",
    marginRight: "15px"
  },
  input: {
    margin: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(0, 0, 0, -1),
    paddingBottom: theme.spacing(3),
    width: "38vw"
  }
}));

export default function CardModalActivity() {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" mt={1}>
        <TimelineIcon className={classes.icon} />
        <Box>
          <Typography className={classes.headTitle}>Activity</Typography>
        </Box>
      </Box>
      <Box display="flex" mt={1}>
        <Avatar
          alt="Remy Sharp"
          src="/images/1.jpg"
          variant="square"
          className={classes.small}
        />
        <Box>
          <Paper className={classes.card} elevation={0}>
            <InputBase
              autoFocus
              multiline
              fullWidth
              inputProps={{ className: classes.input }}
              placeholder="Write a comment"
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}
