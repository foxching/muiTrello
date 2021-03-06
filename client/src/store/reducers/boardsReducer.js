import {
  LOAD_BOARDS,
  ADD_BOARD,
  LOADING_BOARDS,
  SET_BOARD_BACKGROUND,
  ADD_LIST,
  DELETE_LIST
} from "../actions/types";

const initialState = {};

const setBoardLoading = state => {
  return { ...state };
};

const loadBoards = (payload, state) => {
  const { name, color, listsIds, author, id } = payload;
  const newBoard = {
    id,
    name,
    color,
    team: "rechie",
    listsIds,
    author
  };
  return { ...state, [id]: newBoard };
};

const addBoard = (payload, state) => {
  const { _id, name, color, team, author, listsIds } = payload;
  const newBoard = {
    id: _id,
    name,
    color,
    team,
    listsIds,
    author
  };
  return { ...state, [_id]: newBoard };
};

const setBoardBackground = (payload, state) => {
  const { color } = payload.color;
  const { boardId } = payload;
  const Board = state[boardId];
  return {
    ...state,
    [boardId]: {
      ...Board,
      color
    }
  };
};

const addList = (payload, state) => {
  const { board, _id } = payload;
  const Board = state[board];
  return {
    ...state,
    [board]: { ...Board, listsIds: [...Board.listsIds, _id] }
  };
};

const deleteList = (payload, state) => {
  const { listId, boardId } = payload;
  const Board = state[boardId];
  return {
    ...state,
    [boardId]: {
      ...Board,
      listsIds: [...Board.listsIds.filter(id => id !== listId)]
    }
  };
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BOARDS:
      return setBoardLoading(action.payload, state);
    case LOAD_BOARDS:
      return loadBoards(action.payload, state);
    case ADD_BOARD:
      return addBoard(action.payload, state);
    case SET_BOARD_BACKGROUND:
      return setBoardBackground(action.payload, state);
    case ADD_LIST:
      return addList(action.payload, state);
    case DELETE_LIST:
      return deleteList(action.payload, state);
    default:
      return state;
  }
};

export default boardsReducer;
