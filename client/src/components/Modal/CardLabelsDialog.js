import React from "react";
import { Menu, Box, Typography, Divider, MenuItem } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Clear from "@material-ui/icons/Clear";

export default function CardLabelsDialog({
  anchorEl,
  open,
  handleClose,
  labels,
  handleClick,
  cardLabels
}) {
  return (
    <Menu
      id="lock-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
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
          Labels
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
      {labels.map(label => (
        <MenuItem key={label.id} onClick={() => handleClick(label)}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "220px",
              backgroundColor: label.color,
              padding: "8px",
              color: "#000",
              border: "2px",
              borderRadius: "3px"
            }}
          >
            {label.label}
            {cardLabels.some(cardLabel => cardLabel.label === label.label) ? (
              <Icon
                style={{ color: "#fff", fontSize: "16px", cursor: "pointer" }}
              >
                check
              </Icon>
            ) : (
              <span></span>
            )}
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );
}
