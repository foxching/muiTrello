import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import MenuOption from "../../components/Modal/MenuOption";
import { editListTitle } from "../../store/actions/listsAction"

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
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const classes = useStyles();

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    const newListTitle = {
      title: newTitle
    }
    if (newTitle !== "") {
      dispatch(editListTitle(newListTitle, listId))
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
