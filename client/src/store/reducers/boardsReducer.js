import { ADD_BOARDS, BOARDS_LOADING, CLEAR_BOARDS } from '../actions/types'

const initialState = {};

const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_BOARDS:
            return state = {}
        case ADD_BOARDS:
            const { name, color, id } = action.payload;
            const newBoard = {
                id,
                name,
                color,
                team: "rechie",
                listsIds: []
            };
            return { ...state, [id]: newBoard };
        default:
            return state;
    }
};

export default boardsReducer;