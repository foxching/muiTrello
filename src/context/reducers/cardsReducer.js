import { CONSTANTS } from "../types";

const deleteList = (list, state) => {
  const { listId } = list;
  const initialState = {
    "card-0": {
      text: "Last Episode",
      id: `card-0`,
      list: "list-0"
    },
    "card-1": {
      text: "2nd Episode",
      id: `card-1`,
      list: "list-1"
    }
  };
  let x = "";
  for (const [key, value] of Object.entries(state)) {
    if (value.listId === listId) {
      x = `${key}`;
    }
  }
  delete state[x];
  return {
    ...state
  };
};

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

const deleteCard = (card, state) => {
  const { cardId } = card;
  delete state[cardId];
  return {
    ...state
  };
};

const editCardProps = (card, state) => {
  const { value, listId, cardId, type } = card;
  const currentCard = state[cardId];
  if (type === "title") {
    currentCard.text = value;
  } else if (type === "description") {
    currentCard.description = value;
  }

  return {
    ...state,
    [cardId]: {
      ...currentCard
    }
  };
};

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.DELETE_LIST:
      return deleteList(action.payload, state);
    case CONSTANTS.ADD_CARD:
      return addCard(action.payload, state);
    case CONSTANTS.DELETE_CARD:
      return deleteCard(action.payload, state);
    case CONSTANTS.EDIT_CARD_PROPS:
      return editCardProps(action.payload, state);
    default:
      return state;
  }
};
