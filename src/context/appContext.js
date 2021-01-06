import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import store from "../utils/store";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [data, setData] = useState(store);
  const [activeBoard, setActiveBoard] = useState("");
  const [background, setBackground] = useState("green");

  //handle new card
  const addCard = (title, listId) => {
    const newCard = {
      title,
      id: uuidv4(),
      description: "",
      labels: [],
      dueDate: ""
    };
    const board = data.boards[activeBoard];
    const list = board.lists[listId];
    list.cards = [...list.cards, newCard];
    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          lists: {
            ...board.lists,
            [listId]: list
          }
        }
      }
    };
    setData(newCardState);
  };

  const editCardProps = (value, listId, cardId, type) => {
    const board = data.boards[activeBoard];
    const list = board.lists[listId];
    const card = list.cards.find((card) => card.id === cardId);

    //logic to add/remove labels
    const labels = [...card.labels];
    const label = labels.find((lbl) => lbl.label === value.label);
    let newLabels;
    if (label) {
      newLabels = labels.filter((oldlbl) => oldlbl.label !== value.label);
    } else {
      newLabels = [...labels, value];
    }

    //filtering type of actions
    if (type === "title") {
      card.title = value;
    } else if (type === "description") {
      card.description = value;
    } else if (type === "labels") {
      card.labels = newLabels;
    } else {
      card.dueDate = value;
    }

    //logic to add new card values to state
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

    //new card
    const newList = {
      ...list,
      cards: newCard
    };

    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          lists: {
            ...board.lists,
            [listId]: newList
          }
        }
      }
    };
    setData(newCardState);
  };

  //delete card
  const deleteCard = (cardId, listId) => {
    const board = data.boards[activeBoard];
    const list = board.lists[listId];
    const cards = list.cards.filter((card) => card.id !== cardId);

    const newList = {
      ...list,
      cards
    };

    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          lists: {
            ...board.lists,
            [listId]: newList
          }
        }
      }
    };
    setData(newCardState);
  };

  //handle adding new list
  const addList = (title) => {
    const board = data.boards[activeBoard];
    const newListId = uuidv4();

    const newList = {
      id: newListId,
      title,
      cards: [],
      boardId: activeBoard
    };

    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          listIds: [...board.listIds, newListId],
          lists: {
            ...board.lists,
            [newListId]: newList
          }
        }
      }
    };
    setData(newCardState);
  };

  //handle update title of list
  const changeListTitle = (newTitle, listId) => {
    const board = data.boards[activeBoard];
    const list = board.lists[listId];
    list.title = newTitle;

    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          lists: {
            [listId]: list
          }
        }
      }
    };
    setData(newCardState);
  };

  const deleteList = (listId) => {
    const board = data.boards[activeBoard];
    const listsIds = [...board.listIds.filter((Id) => Id !== listId)];
    const lists = { ...board.lists };
    delete lists[listId];
    const newCardState = {
      ...data,
      boards: {
        ...data.boards,
        [activeBoard]: {
          ...board,
          listIds: listsIds,
          lists: {
            ...lists
          }
        }
      }
    };
    setData(newCardState);
  };

  //handle drag and drop
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    const board = data.boards[activeBoard];

    if (!destination) return;

    if (type === "list") {
      const newListIds = board.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = board.lists[source.droppableId];
    const destinationList = board.lists[destination.droppableId];
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
        setBackground,
        setActiveBoard
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
