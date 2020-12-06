import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import store from "../utils/store";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState(store);

  const addCard = (title, listId) => {
    const newCard = {
      title,
      id: uuidv4()
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newCardState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    };
    setData(newCardState);
  };

  const addList = (title) => {
    const newListId = uuidv4();

    const newList = {
      id: newListId,
      title,
      cards: []
    };

    const newCardState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList
      }
    };
    setData(newCardState);
  };

  const changeListTitle = (newTitle, listId) => {
    const list = data.lists[listId];
    list.title = newTitle;

    const newCardState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    };

    setData(newCardState);
  };

  return (
    <AppContext.Provider
      value={{ data, setData, addCard, addList, changeListTitle }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
