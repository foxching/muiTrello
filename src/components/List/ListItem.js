import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ListTitle from "./ListTitle";
import Card from ".././Card/Card";
import Input from "../Input/Input";
import "simplebar/dist/simplebar.min.css";
//import SimpleBar from "simplebar-react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    overflowX: "auto"
  },
  mainroot: {
    maxHeight: "340px",
    minHeight: "120px",
    margin: "2px",
    scrollMarginTop: "10px"
  }
}));

export default function ListItem(props) {
  const { list, listId, index } = props;
  const classes = useStyles();
  return (
    <Draggable draggableId={listId} index={index}>
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
                      listId={list.id}
                      listTitle={list.title}
                      card={card}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                  <Input type="card" listId={list.id} />
                </div>
              )}
            </Droppable>
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
