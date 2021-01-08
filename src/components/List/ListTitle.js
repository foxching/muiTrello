import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import { AppContext } from "../../context/appContext";
import MenuOption from "../../components/Modal/MenuOption";

const useStyles = makeStyles((theme) => ({
  editableContainer: {
    display: "flex",
    margin: theme.spacing(1),
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative"
  },
  editableTitle: {
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

export default function ListTitle({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const { changeListTitle } = useContext(AppContext);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    if (newTitle !== "") {
      changeListTitle(newTitle, listId);
      setOpen(!open);
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleOnBlur();
    }
  };

  return (
    <>
      {open ? (
        <InputBase
          autoFocus
          value={newTitle}
          inputProps={{ className: classes.input }}
          fullWidth
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onKeyDown={onKeyDownHandler}
        />
      ) : (
        <div className={classes.editableContainer}>
          <Typography
            className={classes.editableTitle}
            onClick={() => setOpen(!open)}
          >
            {title}
          </Typography>
          <MenuOption listId={listId} />
        </div>
      )}
    </>
  );
}
