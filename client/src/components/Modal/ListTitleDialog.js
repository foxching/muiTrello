import React from "react";
import { Menu, Box, Typography, Divider, MenuItem } from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";

const ITEM_HEIGHT = 48;

export default function OptionModal({
  anchorEl,
  open,
  handleClose,
  options,
  title,
  handleClick
}) {
  return (
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
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
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
          {title}
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
      {options.map(option => (
        <MenuItem key={option.id} onClick={() => handleClick(option)}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
