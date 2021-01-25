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

const addBoard = (newBoard, state) => {
    const { _id, name, color, team, listsIds } = newBoard
    const board = {
        id: _id,
        name,
        color,
        team,
        listsIds
    };
    return { ...state, [_id]: board };
}

const addList = (list, state) => {
    //const { id, boardId } = list
    //return { ...state, [boardId]: { state.listsIds: [...listsIds, id] } }
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
        //return addList(action.payload, state)
        default:
            return state;
    }
};

export default boardsReducer;