import React, { useState } from "react";
import { Box, IconButton, InputBase, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";

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

export default function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Box mt={1}>
      {open ? (
        <Box>
          <InputBase
            autoFocus
            value="Todo"
            inputProps={{ className: classes.input }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </Box>
      ) : (
        <Box className={classes.editableContainer}>
          <Typography
            className={classes.editableTitlte}
            onClick={() => setOpen(!open)}
          >
            Todo
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
