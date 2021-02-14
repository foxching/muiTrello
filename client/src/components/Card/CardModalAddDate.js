import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { updateCardLabels } from "../../store/actions/cardsAction";
import CardDateDialog from "../Modal/CardDateDialog";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis
}));

export default function CardModalAddDate({ cardId, listId, cardDueDate }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [date, setDate] = useState(new Date());
  const [textDate, setTextDate] = useState("");
  const [textTime, setTextTime] = useState("");
  const classes = useStyles();

  const handleSetAnchor = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = date => {
    setDate(date);
    setTextDate(
      `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    );
  };

  const handleSubmit = e => {
    const dueDate = textDate + " " + textTime;
    const cardDate = {
      dueDate
    };
    dispatch(updateCardLabels(cardDate, cardId, "date"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (cardDueDate) {
      setTextDate(cardDueDate.split(" ")[0]);
      setTextTime(cardDueDate.split(" ")[1]);
    }
  }, [cardDueDate]);

  return (
    <>
      <Button
        color="default"
        variant="contained"
        startIcon={<ScheduleIcon />}
        className={classes.modalMenubtn}
        onClick={handleSetAnchor}
      >
        Due Date
      </Button>
      <CardDateDialog
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
        title="Due Date"
        textDate={textDate}
        setTextTime={setTextTime}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        date={date}
        textTime={textTime}
      />
    </>
  );
}
