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
    width: "280px",
    margin: theme.spacing(1, 1, 1, 1),
    paddingBottom: theme.spacing(4)
  },
  input: {
    margin: theme.spacing(1)
  },
  confirmContainer: {
    margin: theme.spacing(0, 1, 1, 1)
  },
  confirm: {
    background: "#5AAC44",
    color: "$fff",
    "&:hover": {
      background: fade("#5AAC44", 0.25)
    }
  }
}));
export default function InputCard({ setOpen, listId, type }) {
  const [cardTitle, setCardTitle] = useState("");
  const { addCard, addList } = useContext(AppContext);
  const classes = useStyles();

  const handleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleAddtoCard = () => {
    if (type === "list") {
      addList(cardTitle);
    } else {
      addCard(cardTitle, listId);
    }
    setOpen(false);
    setCardTitle("");
  };

  return (
    <Box>
      <Box>
        <Paper className={classes.card}>
          <InputBase
            autoFocus
            onChange={handleChange}
            onBlur={() => setOpen(false)}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder={
              type === "list" ? "Enter list title" : "Enter card text.."
            }
            value={cardTitle}
          />
        </Paper>
      </Box>
      <Box className={classes.confirmContainer}>
        <Button className={classes.confirm} onClick={handleAddtoCard}>
          {type === "list" ? "Add List" : "Add Card"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
