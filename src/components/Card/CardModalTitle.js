import React, { useState, useEffect, useContext } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";
import ClearIcon from "@material-ui/icons/Clear";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1, 1, 1, 0),
    paddingBottom: theme.spacing(3),
    background: fade("#424242", 0.25),
    width: "50vw"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000"
  },
  input: {
    fontSize: "18px",
    fontWeight: "400",
    margin: theme.spacing(1)
  },
  confirmBtn: {
    background: "#5AAC44",
    color: "$fff",
    "&:hover": {
      background: fade("#5AAC44", 0.25)
    }
  },
  icon: {
    marginRight: "15px",
    color: "#9e9e9e"
  },
  closeBtn: {
    marginLeft: "10px"
  },
  listTitle: {
    fontSize: "10px",
    marginLeft: "12px",
    color: theme.palette.grey[500]
  }
}));

export default function CardTitle({ title, listId, listTitle, cardId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const { editCardProps } = useContext(AppContext);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    editCardProps(newTitle, listId, cardId, "title");
    setOpen(false);
  };

  useEffect(() => {
    if (title) {
      setNewTitle(title);
    }
  }, [title]);

  return (
    <Box display="flex">
      <ComputerIcon className={classes.icon} />
      {open ? (
        <Box display="flex" flexDirection="column">
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

          <Box>
            <Button
              size="small"
              className={classes.confirmBtn}
              onClick={handleSave}
            >
              Save
            </Button>
            <IconButton size="small" className={classes.closeBtn}>
              <ClearIcon onClick={() => setOpen(!open)} />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography
            className={classes.cardTitle}
            onClick={() => setOpen(!open)}
          >
            {title}
            <Box component="span" className={classes.listTitle}>
              in list {listTitle}
            </Box>
          </Typography>
        </Box>
      )}
    </Box>
  );
}
