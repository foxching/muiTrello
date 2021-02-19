import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import { addList } from "../../store/actions/listsAction";
import { addCard } from "../../store/actions/cardsAction";

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1, 1, 1, 0),
    margin: theme.spacing(1),
    width: (props) => props.type === "list" ? "300px" : "",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    margin: theme.spacing(1)
  },
  confirmContainer: {
    margin: theme.spacing(1, 1, 1, 1)
  },
  confirm: {
    background: "#5AAC44",
    color: "$fff",
    "&:hover": {
      background: fade("#5AAC44", 0.25)
    }
  }
}));
export default function InputCard(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const classes = useStyles(props);
  const { listId, setOpen, type } = props
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleAddtoCard = () => {
    if (type === "list") {
      const newList = {
        title: text
      };
      dispatch(addList(newList));
    } else {
      const newCard = {
        text
      };
      if (text.length > 0) {
        dispatch(addCard(newCard, listId));
      }
    }
    setOpen(false);
    setText("");
  };

  return (
    <>
      <Paper className={classes.card}>
        <InputBase
          autoFocus
          onChange={handleChange}
          onBlur={() => setOpen(false)}
          multiline
          inputProps={{ className: classes.input }}
          placeholder={
            type === "list" ? "Enter list title" : "Enter card text.."
          }
          value={text}
        />
      </Paper>

      <Box className={classes.confirmContainer}>
        <Button
          size="small"
          className={classes.confirm}
          onClick={handleAddtoCard}
        >
          {type === "list" ? "Add List" : "Add Card"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
    </>
  );
}
