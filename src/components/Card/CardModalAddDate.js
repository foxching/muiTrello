import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import Clear from "@material-ui/icons/Clear";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  btn: {
    marginBottom: "10px",
    fontSize: "13px"
  }
}));

export default function CardModalAddDate({ cardId, listId, cardLabels }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [textDate, setTextDate] = React.useState("2020-12-21");
  const [textTime, setTextTime] = React.useState();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (date) => {
    setDate(date);
    setTextDate(
      `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textDate);
    console.log(textTime);
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
        <MenuItem>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <TextField
                variant="outlined"
                style={{ marginBottom: "10px", width: "150px" }}
                size="small"
                value={textDate}
                type="text"
                label="Date"
              />
              <TextField
                variant="outlined"
                style={{ marginBottom: "10px", width: "150px" }}
                size="small"
                type="time"
                onChange={(e) => setTextTime(e.target.value)}
                value={textTime}
                label="Time"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Box>

            <form onSubmit={handleSubmit}>
              <Calendar onChange={handleChange} value={date} />
              <Button
                style={{ marginTop: "10px" }}
                type="submit"
                color="secondary"
                variant="contained"
                size="small"
              >
                Save
              </Button>
            </form>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
