import { combineReducers } from 'redux';
import activeBoardReducer from './activeBoardReducer';
import boardOrderReducer from './boardOrderReducer';
import boardsReducer from './boardsReducer';
import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';
import errorsReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    activeBoard: activeBoardReducer,
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    boardOrder: boardOrderReducer,
    auth: authReducer,
    error: errorsReducer
})