import { CONSTANTS } from "../types";

const addCard = (card, state) => {
  const { title, newCardId, listId } = card;
  const newCard = {
    id: newCardId,
    listId,
    text: title,
    description: "",
    labels: [],
    dueDate: ""
  };
  return {
    ...state,
    [newCardId]: newCard
  };
};

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD:
      return addCard(action.payload, state);
    default:
      return state;
  }
};
