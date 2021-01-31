import { SET_ACTIVE_BOARD, SET_BOARD_BACKGROUND } from '../actions/types'

const initialState = null;

const setActiveBoard = (board, state) => {
    const { _id, name, color, listsIds, team } = board
    const activeBoard = {
        id: _id,
        name,
        color,
        team,
        listsIds
    }
    return {
        ...state,
        ...activeBoard
    }
}

const setBoardBackground = (payload, state) => {
    const { color } = payload.color
    return {
        ...state,
        color
    }
}


const activeBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_BOARD:
            return setActiveBoard(action.payload, state)
        case SET_BOARD_BACKGROUND:
            return setBoardBackground(action.payload, state)
        default:
            return state;
    }
};

export default activeBoardReducer;