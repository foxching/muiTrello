import React, { useContext } from "react";
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
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(5),
    backgroundColor: "#EBECF0",
    minWidth: "50vw",
    maxWidth: "60vw",
    minHeight: "80vh",
    maxHeight: "80vh"
  },
  closeButton: {
    position: "absolute",
    right: "-100px",
    top: "-20px",
    color: theme.palette.grey[500],
    [theme.breakpoints.down("md")]: {
      right: "-40px"
    }
  }
}));

export default function CardModal({
  card,
  listId,
  listTitle,
  closeModal,
  open
}) {
  const { deleteCard } = useContext(AppContext);
  const classes = useStyles();

  const handleDeleteCard = () => {
    deleteCard(card.id, listId);
    closeModal();
  };
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle style={{ width: "90%", position: "relative" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ position: "relative" }}
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
      <DialogContent style={{ marginTop: "-10px" }}>
        <Grid container justify="space-between">
          <Grid item xs={8}>
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
          <Grid item xs={3}>
            <CardModalSideMenu
              handleDeleteCard={handleDeleteCard}
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
