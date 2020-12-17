import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import InputCard from "./InputCard";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px"
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    backgroundColor: "#EBECF0",
    "&:hover": {
      background: fade("#424242", 0.25),
      cursor: "pointer"
    }
  },
  inputName: {
    fontWeight: "400",
    color: theme.palette.grey[500]
  }
}));

export default function Input({ listId, type }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography variant="subtitle1" className={classes.inputName}>
            {" "}
            + {type === "list" ? "Add Another List" : "Add More Card"}
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
}
