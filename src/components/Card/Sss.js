import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Clear from "@material-ui/icons/Clear";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { AppContext } from "../../context/appContext";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  btn: {
    marginBottom: "10px",
    fontSize: "13px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 300
  }
}));

export default function CardModalAddDate({ cardId, listId, cardLabels }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());
  const { editCardProps } = useContext(AppContext);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
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
        startIcon={<ScheduleIcon />}
        className={classes.btn}
        fullWidth
        onClick={handleClickListItem}
      >
        Due Date
      </Button>

      <Menu
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

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MenuItem>
            <Box style={{ width: "400px" }}>
              <DateTimePicker
                disableToolbar
                value={selectedDate}
                disablePast
                onChange={handleDateChange}
                label="With Today Button"
                showTodayButton
              />
            </Box>
          </MenuItem>
        </MuiPickersUtilsProvider>
      </Menu>
    </>
  );
}
