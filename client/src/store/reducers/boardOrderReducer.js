import { LOAD_BOARDS, ADD_BOARD, LOADING_BOARDS } from "../actions/types";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BOARDS:
      return (state = []);
    case LOAD_BOARDS:
      const { id } = action.payload;
      return [...state, id];
    case ADD_BOARD:
      const { _id } = action.payload;
      return [...state, _id];
    default:
      return state;
  }
};

export default boardOrderReducer;
