import {
  LOADING_LISTS,
  LOAD_LISTS,
  ADD_LIST,
  UPDATE_LIST_TITLE,
  DELETE_LIST,
  ADD_CARD,
  DELETE_CARD
} from "../actions/types";

const initialState = {};

const setLoadingLists = state => {
  return { ...state };
};
const loadLists = (payload, state) => {
  const { title, cards, id, board, author } = payload;
  const newList = {
    id,
    title,
    cards,
    board,
    author
  };
  return { ...state, [id]: newList };
};

const addList = (payload, state) => {
  const { board, _id, title, cards, author } = payload;
  const newList = {
    id: _id,
    title,
    cards,
    board,
    author
  };
  return { ...state, [_id]: newList };
};

const updateListTitle = (payload, state) => {
  const { listId } = payload;
  const { title } = payload.title;
  const List = state[listId];
  return {
    ...state,
    [listId]: { ...List, title: title }
  };
};

const deleteList = (payload, state) => {
  const { listId } = payload;
  delete state[listId];
  return {
    ...state
  };
};

const addCard = (payload, state) => {
  const { _id, list } = payload;
  const List = state[list];
  return {
    ...state,
    [list]: { ...List, cards: [...List.cards, _id] }
  };
};

const deleteCard = (payload, state) => {
  const { cardId, listId } = payload;
  const List = state[listId];
  return {
    ...state,
    [listId]: { ...List, cards: [...List.cards.filter(id => id !== cardId)] }
  };
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_LISTS:
      return setLoadingLists(action.payload, state);
    case LOAD_LISTS:
      return loadLists(action.payload, state);
    case ADD_LIST:
      return addList(action.payload, state);
    case UPDATE_LIST_TITLE:
      return updateListTitle(action.payload, state);
    case DELETE_LIST:
      return deleteList(action.payload, state);
    case ADD_CARD:
      return addCard(action.payload, state);
    case DELETE_CARD:
      return deleteCard(action.payload, state);
    default:
      return state;
  }
};

export default listsReducer;
