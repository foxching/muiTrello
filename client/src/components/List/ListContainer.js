import React, { useContext, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "./ListItem";
import Input from "../Input/Input";
import { CONSTANTS } from "../../context/types";
import { AppContext } from "../../context/appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

export default function ListContainer({ boardId }) {
  const { boards, dispatchActiveBoard, lists, onDragEnd } = useContext(
    AppContext
  );
  const classes = useStyles();

  const board = boards[boardId];
  //console.log(board);

  useEffect(() => {
    dispatchActiveBoard({ type: CONSTANTS.SET_ACTIVE_BOARD, payload: board });
  }, [dispatchActiveBoard, board]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <div
            className={classes.root}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {board.listsIds.map((listId, index) => {
              const list = lists[listId];
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
