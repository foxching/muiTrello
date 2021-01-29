import { LOAD_BOARDS, ADD_BOARD, CLEAR_BOARDS, ADD_LIST, DELETE_LIST } from '../actions/types'


const initialState = {};

const clearBoard = (state) => {
    return state = initialState
}

const loadBoards = (boards, state) => {
    const { name, color, listsIds, id } = boards;
    const newBoard = {
        id,
        name,
        color,
        team: "rechie",
        listsIds
    };
    return { ...state, [id]: newBoard };
}

const addBoard = (board, state) => {
    const { _id, name, color, team, listsIds } = board
    const newBoard = {
        id: _id,
        name,
        color,
        team,
        listsIds
    };
    return { ...state, [_id]: newBoard };
}

const addList = (list, state) => {
    const { board, _id } = list
    const Board = state[board]
    return {
        ...state,
        [board]: { ...Board, listsIds: [...Board.listsIds, _id] }
    };
}

const deleteList = (list, state) => {
    const { listId, boardId } = list
    const Board = state[boardId]
    return {
        ...state,
        [boardId]: { ...Board, listsIds: [...Board.listsIds.filter((id) => id !== listId)] }
    }
}


const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_BOARDS:
            return clearBoard(action.payload, state);
        case LOAD_BOARDS:
            return loadBoards(action.payload, state)
        case ADD_BOARD:
            return addBoard(action.payload, state)
        case ADD_LIST:
            return addList(action.payload, state)
        case DELETE_LIST:
            return deleteList(action.payload, state)
        default:
            return state;
    }
};

export default boardsReducer;