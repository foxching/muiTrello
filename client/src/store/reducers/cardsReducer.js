import {
  LOADING_CARDS,
  ADD_CARD,
  LOAD_CARDS,
  DELETE_CARD,
  DELETE_LIST,
  EDIT_CARD_PROPS
} from "../actions/types";

const initialState = {};

const setLoadingCards = state => {
  return { ...state };
};

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
  y.map(yy => delete state[yy]);
  return {
    ...state
  };
};

const loadCard = (payload, state) => {
  const { id, text, description, labels, dueDate, list, author } = payload;
  const newCard = {
    id,
    text,
    description,
    labels,
    dueDate,
    list,
    author
  };
  return { ...state, [id]: newCard };
};

const addCard = (payload, state) => {
  const { _id, text, description, labels, dueDate, list, author } = payload;
  const newCard = {
    id: _id,
    text,
    description,
    labels,
    dueDate,
    list,
    author
  };
  return { ...state, [_id]: newCard };
};

const deleteCard = (payload, state) => {
  const { cardId } = payload;
  delete state[cardId];
  return {
    ...state
  };
};

const editCardProps = (payload, state) => {
  const { cardVal, cardId, type } = payload;
  const Card = state[cardId];
  if (type === "title") {
    Card.text = cardVal.text;
  } else if (type === "description") {
    Card.description = cardVal.description;
  } else if (type === "labels") {
    const label = Card.labels.find(lbl => lbl.label === cardVal.labels.label);
    let newLabels;
    if (label) {
      newLabels = Card.labels.filter(
        oldlbl => oldlbl.label !== cardVal.labels.label
      );
    } else {
      newLabels = [...Card.labels, cardVal.labels];
    }
    Card.labels = newLabels;
    console.log(cardVal.labels.label);
  } else {
    Card.dueDate = cardVal.dueDate;
  }
  return {
    ...state,
    [cardId]: {
      ...Card
    }
  };
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CARDS:
      return setLoadingCards(action.payload, state);
    case LOAD_CARDS:
      return loadCard(action.payload, state);
    case ADD_CARD:
      return addCard(action.payload, state);
    case DELETE_CARD:
      return deleteCard(action.payload, state);
    case DELETE_LIST:
      return deleteList(action.payload, state);
    case EDIT_CARD_PROPS:
      return editCardProps(action.payload, state);
    default:
      return state;
  }
};

export default cardsReducer;
