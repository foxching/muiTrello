import { ADD_BOARDS, BOARDS_LOADING, CLEAR_BOARDS } from '../actions/types'

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_BOARDS:
            return state = []
        case ADD_BOARDS:
            const { id } = action.payload;
            return [...state, id];
        default:
            return state;
    }
};

export default boardOrderReducer;