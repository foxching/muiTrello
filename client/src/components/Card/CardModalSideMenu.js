import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import CardModalAddLabels from "./CardModalAddLabels";
import CardModalAddDate from "./CardModalAddDate";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.grey[500],
    fontWeight: "900",
    fontSize: "12px",
    marginBottom: "10px"
  },
  btn: {
    marginBottom: "10px",
    fontSize: "13px"
  }
}));

export default function CardModalSideMenu({
  cardId,
  listId,
  cardLabels,
  cardDueDate,
  handleDeleteCard
}) {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="body2" className={classes.heading}>
          ADD TO CARD
        </Typography>

        <Button
          color="default"
          variant="contained"
          startIcon={<PeopleOutlineIcon />}
          className={classes.btn}
          fullWidth
        >
          Members
        </Button>
        <CardModalAddLabels
          cardId={cardId}
          listId={listId}
          cardLabels={cardLabels}
        />
        <CardModalAddDate
          cardId={cardId}
          listId={listId}
          cardDueDate={cardDueDate}
        />
      </Box>
      {/* Action Area */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        mt={2}
      >
        <Typography variant="body2" className={classes.heading}>
          ACTIONS
        </Typography>
        <Button
          color="default"
          variant="contained"
          startIcon={<ArrowForwardIcon />}
          className={classes.btn}
          fullWidth
          disabled
        >
          Move
        </Button>
        <Button
          color="default"
          variant="contained"
          startIcon={<DeleteIcon />}
          className={classes.btn}
          fullWidth
          onClick={handleDeleteCard}
        >
          Delete
        </Button>
      </Box>
    </>
  );
}