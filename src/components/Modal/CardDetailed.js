import React from "react";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
//icons
import CloseIcon from "@material-ui/icons/Close";
//component
import CardTitle from "../CardTitle";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: theme.spacing(5),
    backgroundColor: "#EBECF0"
  }
}));

export default function CardDetailed({ card, listId, closeModal, children }) {
  const classes = useStyles();
  return (
    <Dialog
      open={!!Object.keys(card).length}
      style={{ minWidth: "90vw" }}
      onClose={closeModal}
      fullWidth
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle style={{ textAlign: "center" }}>
        <Box style={{ position: "relative" }}>
          <CardTitle title={card.title} cardId={card.id} listId={listId} />
          <IconButton
            onClick={closeModal}
            style={{ position: "absolute", top: -20, left: 520 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
