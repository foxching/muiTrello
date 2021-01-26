import { LOAD_BOARDS, ADD_BOARD, ADD_LIST, CLEAR_BOARDS } from '../actions/types'


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



const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_BOARDS:
            return clearBoard(action.payload, state);
        case LOAD_BOARDS:
            return loadBoards(action.payload, state)
        case ADD_BOARD:
            return addBoard(action.payload, state)
        case ADD_LIST:
            console.log(action.payload)
            return addList(action.payload, state)
        default:
            return state;
    }
};

export default boardsReducer;