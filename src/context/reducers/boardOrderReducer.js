import { CONSTANTS } from "../types";

const boardOrderReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD:
      const { id } = action.payload;
      return [...state, id];
    default:
      return state;
  }
};

export default boardOrderReducer;
