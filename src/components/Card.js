import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Button, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1),
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    "& .button": {
      opacity: 0
    },
    "&:hover .button": {
      opacity: 2
    }
  },
  editIcon: {
    fontSize: "15px"
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
            <IconButton size="small" className="button">
              <EditIcon className={classes.editIcon} />
            </IconButton>
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
