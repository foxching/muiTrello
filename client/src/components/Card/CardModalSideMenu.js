import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import CardModalAddLabels from "./CardModalAddLabels";
import CardModalAddDate from "./CardModalAddDate";
import { deleteCard } from "../../store/actions/cardsAction";

const useStyles = makeStyles(theme => ({
  ...theme.spreadThis
}));

export default function CardModalSideMenu({
  cardId,
  listId,
  cardLabels,
  cardDueDate
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Typography variant="body2" className={classes.modalSideMenuHead}>
          ADD TO CARD
        </Typography>
        <Grid container>
          <Grid item xs={6} md={12}>
            <Button
              color="inherit"
              variant="contained"
              startIcon={<PeopleOutlineIcon />}
              className={classes.modalMenubtn}
            >
              Members
            </Button>
          </Grid>
          <Grid item xs={6} md={12}>
            <CardModalAddLabels
              cardId={cardId}
              listId={listId}
              cardLabels={cardLabels}
            />
          </Grid>
          <Grid item xs={6} md={12}>
            <CardModalAddDate
              cardId={cardId}
              listId={listId}
              cardDueDate={cardDueDate}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Typography variant="body2" className={classes.modalSideMenuHead}>
          ACTIONS
        </Typography>
        <Grid container>
          <Grid item xs={6} md={12}>
            <Button
              color="inherit"
              variant="contained"
              startIcon={<ArrowForwardIcon />}
              className={classes.modalMenubtn}
            >
              Move
            </Button>
          </Grid>
          <Grid item xs={6} md={12}>
            <Button
              color="inherit"
              variant="contained"
              startIcon={<DeleteIcon />}
              className={classes.modalMenubtn}
              onClick={() => dispatch(deleteCard(cardId, listId))}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
