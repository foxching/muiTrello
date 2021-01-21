import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Clear from "@material-ui/icons/Clear";
import LabelIcon from "@material-ui/icons/Label";
import Icon from "@material-ui/core/Icon";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  btn: {
    marginBottom: "10px",
    fontSize: "13px"
  }
}));

//const colors = ["green", "blue", "yellow", "pink"];
const labels = [
  { label: "New", color: "green" },
  { label: "Urgent", color: "red" },
  { label: "Finished", color: "brown" },
  { label: "Request", color: "pink" }
];

export default function CardModalAddLabels({ cardId, listId, cardLabels }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const { editCardProps } = useContext(AppContext);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (label) => {
    //console.log(label);
    editCardProps(label, listId, cardId, "labels");
    setSelectedValue(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="default"
        variant="contained"
        startIcon={<LabelIcon />}
        className={classes.btn}
        fullWidth
        onClick={handleClickListItem}
      >
        Add Label
      </Button>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom" }}
        transformOrigin={{ vertical: "top" }}
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
        {labels.map((label, index) => (
          <MenuItem
            key={label.color}
            onClick={(event) => handleMenuItemClick(label)}
          >
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
              {cardLabels.some(
                (cardLabel) => cardLabel.label === label.label
              ) ? (
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
    </>
  );
}
