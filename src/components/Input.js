import React, { useState } from "react";
import { Box, Collapse, Typography, Paper } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";

export default function Input({ listId, type }) {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "300px"
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
          <Typography>
            {" "}
            + {type === "list" ? "Add List" : "Add Card"}
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
}
