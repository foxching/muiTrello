import React from "react";
//mui
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
//context

export default function CardDetailed({ open, setOpenCard }) {
  return (
    <Dialog
      open={open}
      style={{ minWidth: "60vw" }}
      onClose={() => setOpenCard(false)}
    >
      <DialogTitle>Card Detail</DialogTitle>
      <DialogContent>Fuck</DialogContent>
    </Dialog>
  );
}
