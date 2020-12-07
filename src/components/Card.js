import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    alignItems: "center"
  }
}));

export default function Card({ card, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper className={classes.root}>
            <Typography>{card.title}</Typography>
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
