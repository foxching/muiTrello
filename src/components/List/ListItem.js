import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ListTitle from "./ListTitle";
import Card from ".././Card/Card";
import Input from "../Input/Input";

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
                      listTitle={list.title}
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
