import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LabelIcon from "@material-ui/icons/Label";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
          startIcon={<LabelIcon />}
          className={classes.btn}
          fullWidth
        >
          Add Label
        </Button>

        <Button
          color="default"
          variant="contained"
          startIcon={<ScheduleIcon />}
          className={classes.btn}
          fullWidth
        >
          Due Date
        </Button>
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
