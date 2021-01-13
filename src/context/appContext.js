import React, { useState, createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import boardsReducer from "./reducers/boardsReducer";
import listsReducer from "./reducers/listsReducers";
import cardsReducer from "./reducers/cardsReducer";
import activeBoardReducer from "./reducers/activeBoardReducer";
import boardOrderReducer from "./reducers/boardOrderReducer";
import { boardState } from "./initialState/boardState";
import { listState } from "./initialState/listState";
import { cardState } from "./initialState/cardState";
import { activeBoardState } from "./initialState/activeBoardState";
import { boardOrderState } from "./initialState/boardOrderState";

import { CONSTANTS } from "./types";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [background, setBackground] = useState("green");
  const [boards, dispatchBoard] = useReducer(boardsReducer, boardState);
  const [lists, dispatchList] = useReducer(listsReducer, listState);
  const [cards, dispatchCard] = useReducer(cardsReducer, cardState);
  const [activeBoard, dispatchActiveBoard] = useReducer(
    activeBoardReducer,
    activeBoardState
  );
  const [boardOrder, dispatchBoardOrder] = useReducer(
    boardOrderReducer,
    boardOrderState
  );

  //handle adding board
  const addBoard = (board) => {
    dispatchBoard({
      type: CONSTANTS.ADD_BOARD,
      payload: board
    });
    dispatchBoardOrder({
      type: CONSTANTS.ADD_BOARD,
      payload: board
    });
  };

  //handle adding new list
  const addList = (title) => {
    const boardId = activeBoard.id;
    const id = uuidv4();
    dispatchBoard({
      type: CONSTANTS.ADD_LIST,
      payload: { title, boardId, id }
    });
    dispatchList({
      type: CONSTANTS.ADD_LIST,
      payload: { title, boardId, id }
    });
  };

  const changeListTitle = (newTitle, listId) => {
    dispatchList({
      type: CONSTANTS.UPDATE_LIST_TITLE,
      payload: { newTitle, listId }
    });
  };

  const deleteList = (listId) => {
    const boardId = activeBoard.id;
    dispatchBoard({
      type: CONSTANTS.DELETE_LIST,
      payload: { listId, boardId }
    });
    dispatchList({
      type: CONSTANTS.DELETE_LIST,
      payload: { listId }
    });
    dispatchCard({
      type: CONSTANTS.DELETE_LIST,
      payload: { listId }
    });
  };

  const addCard = (title, listId) => {
    const newCardId = uuidv4();
    dispatchList({
      type: CONSTANTS.ADD_CARD,
      payload: { listId, newCardId }
    });
    dispatchCard({
      type: CONSTANTS.ADD_CARD,
      payload: { title, newCardId, listId }
    });
  };

  const deleteCard = (cardId, listId) => {
    dispatchList({
      type: CONSTANTS.DELETE_CARD,
      payload: { cardId, listId }
    });
    dispatchCard({
      type: CONSTANTS.DELETE_CARD,
      payload: { cardId, listId }
    });
  };

  const editCardProps = (value, listId, cardId, type) => {
    dispatchCard({
      type: CONSTANTS.EDIT_CARD_PROPS,
      payload: { value, listId, cardId, type }
    });
  };

  return (
    <AppContext.Provider
      value={{
        boards,
        dispatchBoard,
        addBoard,
        dispatchActiveBoard,
        lists,
        addList,
        changeListTitle,
        deleteList,
        cards,
        addCard,
        deleteCard,
        editCardProps,
        activeBoard,
        boardOrder,
        background,
        setBackground
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
