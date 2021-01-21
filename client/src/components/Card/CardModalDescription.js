import React, { useState, useEffect, useContext } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1, 1, 1, 0),
    paddingBottom: theme.spacing(3),
    background: fade("#424242", 0.25),
    width: "38vw"
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
  description: {
    color: theme.palette.grey[500]
  },
  icon: {
    marginRight: "10px",
    color: "#9e9e9e"
  },
  closeBtn: {
    marginLeft: "10px"
  },
  descriptionContainer: {
    marginLeft: "40px",
    marginTop: "20px",
    width: "100%"
  },
  edit: {
    marginLeft: "12px",
    fontSize: "12px",
    borderBottom: "1px solid grey",
    cursor: "pointer"
  }
}));

export default function CardModalDescription({ description, listId, cardId }) {
  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const { editCardProps } = useContext(AppContext);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleSave = () => {
    editCardProps(newDescription, listId, cardId, "description");
    setOpen(false);
  };

  useEffect(() => {
    if (description) {
      setNewDescription(description);
    }
  }, [description]);

  return (
    <Box>
      {open ? (
        <Box
          display="flex"
          flexDirection="column"
          className={classes.descriptionContainer}
        >
          <Paper className={classes.card}>
            <InputBase
              autoFocus
              inputProps={{ className: classes.input }}
              fullWidth
              multiline
              onChange={handleOnChange}
              value={newDescription}
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
        <Box className={classes.descriptionContainer}>
          <Typography className={classes.description}>
            Description
            <Box
              component="span"
              className={classes.edit}
              onClick={() => setOpen(!open)}
            >
              Edit
            </Box>
          </Typography>
          <Typography paragraph>{description}</Typography>
        </Box>
      )}
    </Box>
  );
}
