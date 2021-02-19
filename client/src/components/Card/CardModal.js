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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dialog: {
    backgroundColor: "#EBECF0",
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      maxWidth={matches ? "xs" : "md"}
      classes={{ paper: classes.dialog }}
      scroll="body"
    >
      <DialogTitle>
        <Box>
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
      <DialogContent style={{ overflow: "hidden" }}>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xs={12} sm={9} md={9}>
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
          <Grid item xs={12} sm={3} md={3}>
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
