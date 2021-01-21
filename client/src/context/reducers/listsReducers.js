import { CONSTANTS } from "../types";

const addList = (list, state) => {
  const { title, boardId, id } = list;
  const newList = {
    id,
    title,
    cards: [],
    board: boardId
  };
  return {
    ...state,
    [id]: newList
  };
};

const updateListTitle = (list, state) => {
  const { newTitle, listId } = list;
  const selectList = state[listId];
  return {
    ...state,
    [listId]: {
      ...selectList,
      title: newTitle
    }
  };
};

const deleteList = (list, state) => {
  const { listId } = list;
  delete state[listId];
  return {
    ...state
  };
};

const addCard = (card, state) => {
  const { listId, newCardId } = card;
  const list = state[listId];
  return {
    ...state,
    [listId]: {
      ...list,
      cards: [...list.cards, newCardId]
    }
  };
};

const deleteCard = (card, state) => {
  const { cardId, listId } = card;
  const list = state[listId];
  return {
    ...state,
    [listId]: {
      ...list,
      cards: [...list.cards.filter((id) => id !== cardId)]
    }
  };
};

//handle drag and drop
const onDragEnd = (result, state) => {
  const { destination, source, draggableId, type } = result;

  if (!destination) return;

  console.log(source.droppableId);
  console.log(destination.droppableId);
  console.log(source.index);
  console.log(destination.index);

  if (type === "list") {
    return state;
  }

  if (source.droppableId === destination.droppableId) {
    const list = state[source.droppableId];
    // console.log(list);
    const card = list.cards.splice(source.index, 1);
    console.log(card);
    list.cards.splice(destination.index, 0, ...card);
    return {
      ...state,
      [source.droppableId]: list
    };
  }

  if (source.droppableId !== destination.droppableId) {
    const listStart = state[source.droppableId];
    const card = listStart.cards.splice(source.index, 1);
    const listEnd = state[destination.droppableId];
    listEnd.cards.splice(destination.index, 0, ...card);
    return {
      ...state,
      [source.droppableId]: listStart,
      [destination.droppableId]: listEnd
    };
  }
  return state;
};

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      return addList(action.payload, state);
    case CONSTANTS.UPDATE_LIST_TITLE:
      return updateListTitle(action.payload, state);
    case CONSTANTS.DELETE_LIST:
      return deleteList(action.payload, state);
    case CONSTANTS.ADD_CARD:
      return addCard(action.payload, state);
    case CONSTANTS.DELETE_CARD:
      return deleteCard(action.payload, state);
    case CONSTANTS.DRAG_HAPPENED:
      return onDragEnd(action.payload, state);
    default:
      return state;
  }
};
