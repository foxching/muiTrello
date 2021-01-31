import { ADD_CARD, LOAD_CARDS, DELETE_CARD, DELETE_LIST } from '../actions/types'

const initialState = {};

const deleteList = (payload, state) => {
  const { listId } = payload;
  let x = "";
  let y = [];
  for (const [key, value] of Object.entries(state)) {
    if (value.list === listId) {
      x = `${key}`;
      y.push(x);
    }
  }
  y.map((yy) => delete state[yy]);
  return {
    ...state
  };
};

const loadCard = (payload, state) => {
  const { id, text, description, labels, dueDate, list } = payload
  const newCard = {
    id,
    text,
    description,
    labels,
    dueDate,
    list,
  }
  return { ...state, [id]: newCard };
}


const addCard = (payload, state) => {
  const { _id, text, description, labels, dueDate, list } = payload
  const newCard = {
    id: _id,
    text,
    description,
    labels,
    dueDate,
    list,
  }
  return { ...state, [_id]: newCard };
}

const deleteCard = (payload, state) => {
  const { cardId } = payload;
  delete state[cardId];
return {
  ...state
};
}

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_CARDS:
      return loadCard(action.payload, state)
    case ADD_CARD:
      return addCard(action.payload, state)
    case DELETE_CARD:
      return deleteCard(action.payload, state)
    case DELETE_LIST:
      return deleteList(action.payload, state)
    default:
      return state;
  }
};

export default cardsReducer;