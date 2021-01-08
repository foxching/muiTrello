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

export default function ListContainer({ boardId }) {
  const { data, onDragEnd, setActiveBoard } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {
    setActiveBoard(boardId);
  }, [setActiveBoard, boardId]);

  const board = data.boards[boardId];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <div
            className={classes.root}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {board.listIds.map((listId, index) => {
              const list = board.lists[listId];
              return (
                <ListItem
                  key={listId}
                  list={list}
                  listId={listId}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
            <Input type="list" listId={null} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
