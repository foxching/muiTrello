import { LOAD_LISTS, ADD_LIST } from '../actions/types'

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
    const { id, title, cards, boardId } = list
    const newList = {
        id,
        title,
        cards,
        board: boardId
    }
    return { ...state, [id]: newList };
}

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LISTS:
            return loadLists(action.payload, state)
        case ADD_LIST:
            console.log(action.payload)
        //return addList(action.payload, state)
        default:
            return state;
    }
};

export default listsReducer;