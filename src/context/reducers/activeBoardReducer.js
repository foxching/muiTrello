import { CONSTANTS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_BOARD:
      return action.payload;
    default:
      return state;
  }
};
