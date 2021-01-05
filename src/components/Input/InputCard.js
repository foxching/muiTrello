import React, { useState, useContext } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 0),
    margin: theme.spacing(1),
    alignItems: "center",
    display: "flex",
    width: "300px",
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
  const [cardTitle, setCardTitle] = useState("");
  const { setOpen, listId, type, boardId } = props;
  const { addCard, addList } = useContext(AppContext);
  const classes = useStyles(props);

  const handleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleAddtoCard = () => {
    if (type === "list") {
      addList(cardTitle, boardId);
    } else {
      addCard(cardTitle, listId, boardId);
    }
    setOpen(false);
    setCardTitle("");
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
          value={cardTitle}
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
