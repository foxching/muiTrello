import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";
import ClearIcon from "@material-ui/icons/Clear";
import { updateCardLabels } from "../../store/actions/cardsAction";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: "15px",
    color: "#9e9e9e"
  },
  card: {
    margin: theme.spacing(1, 1, 1, 0),
    paddingBottom: theme.spacing(3),
    background: fade("#424242", 0.25),
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "320px"
    }
  },
  input: {
    fontSize: "18px",
    fontWeight: "400",
    margin: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  },
  confirmBtn: {
    background: "#5AAC44",
    color: "$fff",
    "&:hover": {
      background: fade("#5AAC44", 0.25)
    }
  },
  closeBtn: {
    marginLeft: "10px"
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000"
  },

  listTitle: {
    fontSize: "10px",
    marginLeft: "12px",
    color: theme.palette.grey[500]
  }
}));

export default function CardTitle({ text, listId, listTitle, cardId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const classes = useStyles();

  const handleOnChange = e => {
    setNewTitle(e.target.value);
  };

  const handleSave = () => {
    const cardText = {
      text: newTitle
    };
    dispatch(updateCardLabels(cardText, cardId, "title"));
    setOpen(false);
  };

  useEffect(() => {
    if (text) {
      setNewTitle(text);
    }
  }, [text]);

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
              {text}
              <Box component="span" className={classes.listTitle}>
                in list {listTitle}
              </Box>
            </Typography>
          </Box>
        )}
    </Box>
  );
}
