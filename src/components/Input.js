import React, { useState } from "react";
import { Box, Collapse, Typography, Paper } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    backgroundColor: "#EBECF0",
    "&:hover": {
      background: fade("#000", 0.25)
    }
  }
}));
export default function Input() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography> + Add Card</Typography>
        </Paper>
      </Collapse>
    </Box>
  );
}
