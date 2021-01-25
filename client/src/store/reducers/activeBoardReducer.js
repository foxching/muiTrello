import { SET_ACTIVE_BOARD } from '../actions/types'

const setActiveBoard = (board, state) => {
    const { _id, name, color, listsIds, team } = board
    const activeBoard = {
        id: _id,
        name,
        color,
        team,
        listsIds
    }
    return activeBoard
}

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_BOARD:
            //console.log(action.payload)
            return setActiveBoard(action.payload, state)
        default:
            return state;
    }
};

export default activeBoardReducer;