import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import store from "../utils/store";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState(store);
  const [background, setBackground] = useState("green");

  //handle new card
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

  const editCardProps = (value, listId, cardId, type) => {
    const list = data.lists[listId];
    const card = list.cards.find((card) => card.id === cardId);

    if (type === "title") {
      card.title = value;
    } else {
      card.description = value;
    }
    const cards = [...list.cards];
    const newCard = cards.map((oldCard) => {
      if (oldCard.id === cardId) {
        return {
          ...oldCard,
          ...card
        };
      } else {
        return oldCard;
      }
    });

    const newList = {
      ...list,
      cards: newCard
    };

    const newCardState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: newList
      }
    };
    setData(newCardState);
    //console.log(state);
  };

  //delete card
  const deleteCard = (cardId, listId) => {
    const list = data.lists[listId];
    const cards = list.cards.filter((card) => card.id !== cardId);

    const newList = {
      ...list,
      cards
    };

    const newCardState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: newList
      }
    };
    setData(newCardState);
  };

  //handle adding new list
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

  //handle update title of list
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

  const deleteList = (listId) => {
    const listsIds = [...data.listIds.filter((Id) => Id !== listId)];
    const lists = { ...data.lists };
    delete lists[listId];
    const newCardState = {
      listIds: listsIds,
      lists
    };
    setData(newCardState);
  };

  //handle drag and drop
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList
        }
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList
        }
      };
      setData(newSate);
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        addList,
        changeListTitle,
        deleteList,
        addCard,
        editCardProps,
        deleteCard,
        onDragEnd,
        background,
        setBackground
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
