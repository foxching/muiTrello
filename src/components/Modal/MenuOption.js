import React, { useState, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Clear from "@material-ui/icons/Clear";
import { AppContext } from "../../context/appContext";

const options = ["Add Card...", "Delete this List..", "Move List.."];

const ITEM_HEIGHT = 48;

export default function MenuOption({ listId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { deleteList } = useContext(AppContext);

  const handleSetAnchor = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (option) => {
    if (option === "Delete this List..") {
      deleteList(listId);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleSetAnchor}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "30ch"
          }
        }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom"
        }}
        transformOrigin={{
          vertical: "top"
        }}
      >
        {" "}
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "40px"
          }}
        >
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "400", color: "#9e9e9e", marginLeft: "15px" }}
          >
            List Actions
          </Typography>
          <Clear
            style={{
              fontSize: "20px",
              color: "#9e9e9e",
              marginRight: "15px",
              cursor: "pointer"
            }}
            onClick={handleClose}
          />
        </Box>
        <Divider />
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => handleClick(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
