import React from "react";
import {
  Popover,
  Divider,
  Typography,
  Box,
  MenuList,
  MenuItem
} from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";

const ITEM_HEIGHT = 48;

export default function BoardMenu({ anchorEl, open, handleClose }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
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
      <MenuList
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "30ch"
          }
        }}
      >
        <MenuItem>Tab 1 - Submenu 1</MenuItem>
        <MenuItem>Tab 1 - Submenu 2</MenuItem>
      </MenuList>
    </Popover>
  );
}
