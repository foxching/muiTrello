import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  InputBase,
  IconButton,
  Typography,
  Paper
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import ComputerIcon from "@material-ui/icons/Computer";
import ClearIcon from "@material-ui/icons/Clear";
import { AppContext } from "../context/appContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1, 1, 1, 1),
    paddingBottom: theme.spacing(4),
    background: fade("#424242", 0.25),
    width: "36vw"
  },
  editableContainer: {
    display: "flex",
    margin: theme.spacing(1),
    alignItems: "center"
  },
  editableTitlte: {
    flexGrow: 1,
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#9e9e9e",
    marginLeft: "10px"
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "500",
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

export default function CardTitle({ title, listId, cardId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const { editCardTitle } = useContext(AppContext);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    console.log(newTitle);
    editCardTitle(newTitle, listId, cardId);
    setOpen(false);
  };

  useEffect(() => {
    if (title) {
      setNewTitle(title);
    }
  }, [title]);

  return (
    <Box display="flex" mt={1}>
      <ComputerIcon style={{ marginRight: "10px", color: "#000" }} />
      {open ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems=""
        >
          <Paper className={classes.card}>
            <InputBase
              autoFocus
              inputProps={{ className: classes.input }}
              fullWidth
              multiline
              onChange={handleOnChange}
              value={newTitle}
            />
          </Paper>

          <Box
            display="flex"
            justifyContent="flex-start"
            style={{ height: 30, marginLeft: "10px" }}
          >
            <Button className={classes.confirm} onClick={handleSave}>
              Save
            </Button>
            <IconButton>
              <ClearIcon onClick={() => setOpen(!open)} />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography
            className={classes.editableTitlte}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
