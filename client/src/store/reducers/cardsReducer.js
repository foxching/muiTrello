import { ADD_CARD, LOAD_CARDS, DELETE_LIST } from '../actions/types'

const initialState = {};

const deleteList = (list, state) => {
  const { listId } = list;
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


const addCard = (card, state) => {
  const { _id, text, description, labels, dueDate, list } = card
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

const loadCard = (card, state) => {
  const { id, text, description, labels, dueDate, list } = card
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

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return addCard(action.payload, state)
    case LOAD_CARDS:
      return loadCard(action.payload, state)
    case DELETE_LIST:
      return deleteList(action.payload, state)
    default:
      return state;
  }
};

export default cardsReducer;