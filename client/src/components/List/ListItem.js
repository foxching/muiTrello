import React from "react";
import { useSelector } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ListTitle from "./ListTitle";
import Card from ".././Card/Card";
import Input from "../Input/Input";
import "simplebar/dist/simplebar.min.css";
import SimpleBarReact from "simplebar-react";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    overflowX: "auto",
    //width: "300px",
  },
  mainroot: {
    maxHeight: "340px",
    minHeight: "120px",
    margin: "2px",
    scrollMarginTop: "10px"
  }
}));

export default function ListItem({ list, listId, index }) {
  const cards = useSelector(state => state.cards);
  const classes = useStyles();

  return (
    <Draggable draggableId={listId} index={index}>
      {provided => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <ListTitle title={list.title} listId={listId} />
            <Droppable droppableId={listId} type="card">
              {provided => (
                <SimpleBarReact forceVisible="y" autoHide={false} style={{ maxHeight: "80vh", height: "auto", width: 300 }}>
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {list.cards.map((cardId, index) => {
                      const card = cards[cardId];
                      if (card === undefined) return null
                      return (
                        <Card
                          key={cardId}
                          listId={listId}
                          listTitle={list.title}
                          card={card}
                          index={index}
                        />
                      );
                    })}
                    {provided.placeholder}

                  </div>
                  <Input type="card" listId={listId} />
                </SimpleBarReact>

              )}
            </Droppable>
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
