import React, { useState, useContext } from "react";
import { Box, IconButton, InputBase, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from ".././context/appContext";

const useStyles = makeStyles((theme) => ({
  editableContainer: {
    display: "flex",
    margin: theme.spacing(2),
    alignItems: "center"
  },
  editableTitlte: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd"
    }
  }
}));

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const { changeListTitle } = useContext(AppContext);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    changeListTitle(newTitle, listId);
    setOpen(!open);
  };
  return (
    <Box mt={1}>
      {open ? (
        <Box>
          <InputBase
            autoFocus
            value={newTitle}
            inputProps={{ className: classes.input }}
            fullWidth
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </Box>
      ) : (
        <Box className={classes.editableContainer}>
          <Typography
            className={classes.editableTitlte}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
