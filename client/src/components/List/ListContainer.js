import React  from "react";
import { useSelector } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "./ListItem";
import Input from "../Input/Input";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  }
}));

export default function ListContainer({ boardId }) {
  const boards = useSelector(state => state.boards)
  const lists = useSelector(state => state.lists)
  const activeBoard = useSelector(state => state.activeBoard)
  const classes = useStyles()
  let board = boards[activeBoard && activeBoard.id]

  return (
    <DragDropContext >
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <div
            className={classes.root}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {board !== undefined && board.listsIds.map((listId, index) => {
              const list = lists[listId];
              if (list !== undefined) {
                return (
                  <ListItem
                    key={listId}
                    list={list}
                    listId={listId}
                    index={index}
                  />
                );
              }
            })}
            {provided.placeholder}
            <Input type="list" listId={null} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
