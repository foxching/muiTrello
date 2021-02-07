import axios from "axios";
import {
  CLEAR_CARDS,
  CLEAR_LISTS,
  LOAD_LISTS,
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST_TITLE
} from "./types";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./authAction";
import { getListCards } from "./cardsAction";

//load get lists and cards
export const getBoardListCards = boardId => async (dispatch, getState) => {
  dispatch({ type: CLEAR_LISTS });
  dispatch({ type: CLEAR_CARDS });
  axios
    .get(`/api/lists/${boardId}`, tokenConfig(getState))
    .then(res =>
      res.data.map(d => {
        const x = {
          [d._id]: {
            id: d._id,
            title: d.title,
            cards: d.cards,
            board: d.board,
            author: d.author.name
          }
        };
        dispatch({ type: LOAD_LISTS, payload: x[d._id] });
        dispatch(getListCards(x[d._id].id));
        return null;
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//add new  list
export const addList = list => (dispatch, getState) => {
  const boardId = getState().activeBoard.id;
  axios
    .post(`/api/lists/${boardId}`, list, tokenConfig(getState))
    .then(res => {
      dispatch({ type: ADD_LIST, payload: res.data });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//update list title
export const editListTitle = (title, listId) => (dispatch, getState) => {
  axios
    .put(`/api/lists/${listId}`, title, tokenConfig(getState))
    .then(res => {
      dispatch({ type: UPDATE_LIST_TITLE, payload: { title, listId } });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//delete list
export const deleteList = listId => (dispatch, getState) => {
  const boardId = getState().activeBoard.id;
  axios
    .delete(`/api/lists/${listId}/${boardId}`, tokenConfig(getState))
    .then(res => {
      dispatch({ type: DELETE_LIST, payload: { listId, boardId } });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
