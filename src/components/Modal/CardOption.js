import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
//icons
import EditIcon from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";

const options = ["Edit Card", "Delete Card"];

const ITEM_HEIGHT = 48;

export default function CardOption({
  listId,
  handleSetAnchor,
  anchorEl,
  open,
  handleClose
}) {
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleSetAnchor}
      >
        <EditIcon style={{ fontSize: "16px" }} />
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
          <MenuItem key={option} selected={option === "Pyxis"}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
