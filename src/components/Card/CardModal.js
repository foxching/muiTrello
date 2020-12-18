import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CardModalTitle from "./CardModalTitle";

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
    right: "-60px",
    top: "-10px",
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
  children,
  open
}) {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle style={{ width: "90%", position: "relative" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CardModalTitle
            listTitle={listTitle}
            title={card.title}
            cardId={card.id}
            listId={listId}
          />
          <IconButton onClick={closeModal} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent style={{ marginTop: "-10px" }}>{children}</DialogContent>
    </Dialog>
  );
}
