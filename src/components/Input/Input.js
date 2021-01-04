import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import InputCard from "./InputCard";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  addCard: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    backgroundColor: (props) =>
      props.type === "list" ? "rgb(255,255,255, 0.15)" : "#EBECF0",
    "&:hover": {
      background: (props) =>
        props.type === "list" ? fade("#FFFFFF", 0.5) : fade("#424242", 0.25),
      cursor: "pointer"
    }
  },
  inputName: {
    fontWeight: "400",
    color: (props) => (props.type === "list" ? "#fff" : theme.palette.grey[500])
  }
}));

export default function Input(props) {
  const [open, setOpen] = useState(false);
  const { listId, type, boardId } = props;
  const classes = useStyles(props);

  return (
    <Box>
      <Collapse in={open}>
        <InputCard
          setOpen={setOpen}
          listId={listId}
          type={type}
          boardId={boardId}
        />
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
