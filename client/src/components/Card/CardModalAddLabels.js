import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import LabelIcon from "@material-ui/icons/Label";
import { updateCardLabels } from "../../store/actions/cardsAction";
import CardLabelsDialog from "../Modal/CardLabelsDialog";

const labels = [
  { id: 1, label: "New", color: "green" },
  { id: 2, label: "Urgent", color: "red" },
  { id: 3, label: "Finished", color: "brown" },
  { id: 4, label: "Request", color: "pink" }
];

export default function CardModalAddLabels({ cardId, cardLabels }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSetAnchor = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = label => {
    const cardLabel = {
      labels: label
    };
    dispatch(updateCardLabels(cardLabel, cardId, "labels"));
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
        style={{ marginBottom: "10px", fontSize: "13px" }}
        fullWidth
        onClick={handleSetAnchor}
      >
        Add Label
      </Button>
      <CardLabelsDialog
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        labels={labels}
        handleClick={handleClick}
        title="Card Labels"
        cardLabels={cardLabels}
      />
    </>
  );
}
