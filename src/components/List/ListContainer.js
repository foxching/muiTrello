import React, { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "./ListItem";
import Input from "../Input/Input";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

export default function CardList() {
  const { data, onDragEnd } = useContext(AppContext);
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <div
            className={classes.root}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.listIds.map((listId, index) => {
              const list = data.lists[listId];
              return (
                <ListItem
                  listId={listId}
                  key={listId}
                  list={list}
                  index={index}
                />
              );
            })}
            <Input type="list" />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
