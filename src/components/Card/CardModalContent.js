import React from "react";
import Grid from "@material-ui/core/Grid";
import CardModalLabels from "./CardModalLabels";
import CardModalDescription from "./CardModalDescription";
import CardModalSideMenu from "./CardModalSideMenu";

export default function CardContent({ card, listId }) {
  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={8}>
          <CardModalLabels />
          <CardModalDescription description={card.description} />
        </Grid>
        <Grid item xs={3}>
          <CardModalSideMenu />
        </Grid>
      </Grid>
    </>
  );
}
