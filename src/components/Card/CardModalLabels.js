import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "35px",
    marginTop: "10px",
    marginBottom: "10px"
  },
  label: {
    color: theme.palette.grey[500]
  },
  chip: {
    color: "white",
    padding: "3px",
    width: "120%",
    border: "1px"
  }
}));

export default function CardModalLabels() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Typography className={classes.label}>Labels</Typography>
          <Box className={classes.chip} bgcolor="blue">
            Urgent
          </Box>
        </Box>
        <Box>
          <Typography className={classes.label}>Labels</Typography>
          <Box className={classes.chip} bgcolor="green">
            Urgent
          </Box>
        </Box>
        <Box>
          <Typography className={classes.label}>Due Date</Typography>
          <Box className={classes.chip} bgcolor="gray">
            Mar 20 at 12:00am
          </Box>
        </Box>
      </Box>
    </>
  );
}
