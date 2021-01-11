import { CONSTANTS } from "../types";

const addBoard = (board, state) => {
  const { name, color, id } = board;
  const newBoard = {
    id,
    name,
    color,
    team: "rechie",
    listsIds: []
  };
  return { ...state, [id]: newBoard };
};

const addList = (list, state) => {
  const { boardId, id } = list;
  const board = state[boardId];
  return {
    ...state,
    [boardId]: { ...board, listsIds: [...board.listsIds, id] }
  };
};

const deleteList = (list, state) => {
  const { listId, boardId } = list;
  const board = state[boardId];
  return {
    ...state,
    [boardId]: {
      ...board,
      listsIds: [...board.listsIds.filter((id) => id !== listId)]
    }
  };
};

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD:
      return addBoard(action.payload, state);
    case CONSTANTS.ADD_LIST:
      return addList(action.payload, state);
    case CONSTANTS.DELETE_LIST:
      return deleteList(action.payload, state);
    default:
      return state;
  }
};
