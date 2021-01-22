import { combineReducers } from 'redux';
import activeBoardReducer from './activeBoardReducer';
import boardOrderReducer from './boardOrderReducer';
import boardReducer from './boardReducer';
import listReducer from './listReducer';
import cardReducer from './cardReducer';
import ErrorsReducer from './errorReducer';
import AuthReducer from './authReducer';

export default combineReducers({
    activeBoard: activeBoardReducer,
    boards: boardReducer,
    lists: listReducer,
    cards: cardReducer,
    boardOrder: boardOrderReducer,
    auth: AuthReducer,
    error: ErrorsReducer
})