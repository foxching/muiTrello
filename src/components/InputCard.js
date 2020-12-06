import React from "react";
import { Box, Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
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
export default function InputCard({ setOpen }) {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder="Enter a text"
          />
        </Paper>
      </Box>
      <Box className={classes.confirmContainer}>
        <Button className={classes.confirm} onClick={() => setOpen(false)}>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
