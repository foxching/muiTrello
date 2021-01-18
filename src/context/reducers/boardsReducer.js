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

//handle drag and drop
const onDragEnd = (result, state) => {
  const { destination, source, type, boardId } = result;
  const board = state[boardId];
  const lists = board.listsIds;

  if (type === "list") {
    const pulledOutList = lists.splice(source.index, 1);
    lists.splice(destination.index, 0, ...pulledOutList);
    board.listsIds = lists;
    return { ...state, [boardId]: board };
  }
  return state;
};

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD:
      return addBoard(action.payload, state);
    case CONSTANTS.ADD_LIST:
      return addList(action.payload, state);
    case CONSTANTS.DELETE_LIST:
      return deleteList(action.payload, state);
    case CONSTANTS.DRAG_HAPPENED:
      return onDragEnd(action.payload, state);
    default:
      return state;
  }
};
