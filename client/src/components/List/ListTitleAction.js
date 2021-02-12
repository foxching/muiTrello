import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListTitleDialog from "../Modal/ListTitleDialog";
import { deleteList } from "../../store/actions/listsAction";

const options = [
  { id: 1, label: "Add List" },
  { id: 2, label: "Delete List" },
  { id: 3, label: "Move List" }
];

export default function ListTitleAction({ listId }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSetAnchor = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = option => {
    if (option.label === "Delete List") {
      dispatch(deleteList(listId));
    }
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleSetAnchor}
      >
        <MoreVertIcon />
      </IconButton>
      <ListTitleDialog
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        options={options}
        handleClick={handleClick}
        title="List Actions"
      />
    </>
  );
}
