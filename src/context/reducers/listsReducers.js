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
    default:
      return state;
  }
};
