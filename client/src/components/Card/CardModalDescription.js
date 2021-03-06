import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import { updateCardLabels } from "../../store/actions/cardsAction";

const useStyles = makeStyles(theme => ({
  descriptionContainer: {
    marginLeft: "40px",
    marginTop: "20px",
    marginRight: "20px"
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
    fontSize: "1em",
    fontWeight: "400",
    margin: theme.spacing(1),
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
  label: {
    color: theme.palette.grey[500],
    fontSize: "1em"
  },
  edit: {
    marginLeft: "12px",
    fontSize: "12px",
    borderBottom: "1px solid grey",
    cursor: "pointer"
  },
  icon: {
    marginRight: "10px",
    color: "#9e9e9e"
  }
}));

export default function CardModalDescription({ description, listId, cardId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const classes = useStyles();

  const handleOnChange = e => {
    setNewDescription(e.target.value);
  };

  const handleSave = () => {
    const cardDescription = {
      description: newDescription
    };
    dispatch(updateCardLabels(cardDescription, cardId, "description"));
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
          <Box
            display="flex"
            flexDirection="column"
            className={classes.descriptionContainer}
          >
            <Typography className={classes.label}>
              Description
            <Box
                component="span"
                className={classes.edit}
                onClick={() => setOpen(!open)}
              >
                Edit
            </Box>
            </Typography>
            <Box display="flex" flexWrap="wrap">
              <Typography variant="caption" style={{ fontSize: "0.875em" }}>
                {description}
              </Typography>
            </Box>
          </Box>
        )}
    </Box>
  );
}
