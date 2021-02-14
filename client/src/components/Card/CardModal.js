import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import CardModalTitle from "./CardModalTitle";
import CardModalLabels from "./CardModalLabels";
import CardModalDescription from "./CardModalDescription";
import CardModalSideMenu from "./CardModalSideMenu";
import CardModalActivity from "./CardModalActivity";

const useStyles = makeStyles(theme => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(1),
    backgroundColor: "#EBECF0",
    overflow: "hidden"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export default function CardModal({
  card,
  listId,
  listTitle,
  closeModal,
  open
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth="md"
      classes={{ paper: classes.dialog }}
      scroll="paper"
    >
      <DialogTitle>
        <Box
        // display="flex"
        // justifyContent="flex-start"
        // alignItems="center"
        // style={{ position: "relative" }}
        >
          <CardModalTitle
            listTitle={listTitle}
            text={card.text}
            cardId={card.id}
            listId={listId}
          />
          <IconButton onClick={closeModal} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="space-between" spacing={1}>
          <Grid item xs={12} md={9}>
            <CardModalLabels
              cardLabels={card.labels}
              cardDueDate={card.dueDate}
            />
            <CardModalDescription
              description={card.description}
              cardId={card.id}
              listId={listId}
            />
            <CardModalActivity />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardModalSideMenu
              cardLabels={card.labels}
              cardDueDate={card.dueDate}
              cardId={card.id}
              listId={listId}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
