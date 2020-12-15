import React, { useContext, useEffect } from "react";
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

export default function ListContainer() {
  const { data, onDragEnd } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {}, [data]);

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
            {provided.placeholder}
            <Input type="list" />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
