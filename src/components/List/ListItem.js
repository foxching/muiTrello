import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//component
import ListTitle from "./ListTitle";
import Card from "../Card";
import Input from "../Input/Input";
import CardDetailed from "../Modal/CardDetailed";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBECF0",
    width: "300px",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));

export default function ListItem({ list, listId, index }) {
  const classes = useStyles();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <ListTitle title={list.title} listId={listId} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {list.cards.map((card, index) => (
                    <Card
                      key={card.id}
                      listId={listId}
                      card={card}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Input listId={listId} />
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
