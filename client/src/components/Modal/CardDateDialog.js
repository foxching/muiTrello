import React from "react";
import Calendar from "react-calendar";
import {
  Popover,
  Divider,
  Typography,
  Box,
  Button,
  Paper,
  TextField
} from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";
import "react-calendar/dist/Calendar.css";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  confirmBtn: {
    background: "#5AAC44",
    color: "$fff",
    "&:hover": {
      background: fade("#5AAC44", 0.25)
    }
  }
}));

export default function CardDateDialog({
  anchorEl,
  open,
  handleClose,
  title,
  textDate,
  setTextTime,
  handleSubmit,
  handleChange,
  date,
  textTime
}) {
  const classes = useStyles();
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
      <Box style={{ width: "400px" }} p={1}>
        {/* dialog heading here */}
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
            style={{
              fontWeight: "400",
              color: "#9e9e9e",
              marginLeft: "15px"
            }}
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
        <Divider style={{ marginBottom: "10px" }} />
        {/* calendar textfield here */}
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
            disabled
          />
          <TextField
            variant="outlined"
            style={{ marginBottom: "10px", width: "150px" }}
            size="small"
            type="time"
            onChange={e => setTextTime(e.target.value)}
            value={textTime}
            label="Time"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Box>
        {/* calendar form here */}

        <Calendar
          onChange={handleChange}
          value={date}
          className="react-calendar"
        />

        <Button
          onClick={handleSubmit}
          className={classes.confirmBtn}
          type="submit"
          size="small"
          style={{ marginTop: 10, marginBottom: 20 }}
        >
          Save
        </Button>
      </Box>
    </Popover>
  );
}
