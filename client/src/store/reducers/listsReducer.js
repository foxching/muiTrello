import { LOAD_LISTS, ADD_LIST, UPDATE_LIST_TITLE, DELETE_LIST, ADD_CARD, DELETE_CARD, } from '../actions/types'

const initialState = {};

const loadLists = (lists, state) => {
    const { title, cards, id, board } = lists;
    const newList = {
        id,
        title,
        cards,
        board
    };
    return { ...state, [id]: newList };
}

const addList = (list, state) => {
    const { board, _id, title, cards } = list
    const newList = {
        id: _id,
        title,
        cards,
        board
    }
    return { ...state, [_id]: newList };
}


const addCard = (card, state) => {
    const { _id, list } = card
    const List = state[list]
    return {
        ...state,
        [list]: { ...List, cards: [...List.cards, _id] }
    };
}

const updateListTitle = (list, state) => {
    const { listId } = list
    const { title } = list.title
    const List = state[listId]
    return {
        ...state,
        [listId]: { ...List, title: title }
    };
}

const deleteList = (list, state) => {
    const { listId } = list;
    delete state[listId];
    return {
        ...state
    };
}

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LISTS:
            return loadLists(action.payload, state)
        case ADD_LIST:
            return addList(action.payload, state)
        case ADD_CARD:
            return addCard(action.payload, state)
        case UPDATE_LIST_TITLE:
            return updateListTitle(action.payload, state)
        case DELETE_LIST:
            return deleteList(action.payload, state)
        default:
            return state;
    }
};

export default listsReducer;