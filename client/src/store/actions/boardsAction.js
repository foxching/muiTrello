import axios from "axios";
import {
  CLEAR_BOARDS,
  LOAD_BOARDS,
  ADD_BOARD,
  SET_ACTIVE_BOARD,
  SET_BOARD_BACKGROUND
} from "./types";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./authAction";

export const getBoards = () => (dispatch, getState) => {
  dispatch({ type: CLEAR_BOARDS });
  axios
    .get("/api/boards", tokenConfig(getState))
    .then(res =>
      res.data.map(d => {
        const x = {
          [d._id]: {
            id: d._id,
            name: d.name,
            color: d.color,
            team: d.team,
            listsIds: d.listsIds
          }
        };
        dispatch({ type: LOAD_BOARDS, payload: x[d._id] });
        return null;
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//add new  board
export const addBoard = board => (dispatch, getState) => {
  axios
    .post("/api/boards", board, tokenConfig(getState))
    .then(res => {
      dispatch({ type: ADD_BOARD, payload: res.data });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//get specific board detail
export const setActiveBoard = boardId => (dispatch, getState) => {
  axios
    .get(`/api/boards/${boardId}`, tokenConfig(getState))
    .then(res => {
      dispatch({ type: SET_ACTIVE_BOARD, payload: res.data });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//update board background
export const setBoardBackground = color => (dispatch, getState) => {
  const boardId = getState().activeBoard.id;
  axios
    .put(`/api/boards/${boardId}`, color, tokenConfig(getState))
    .then(res => {
      dispatch({ type: SET_BOARD_BACKGROUND, payload: { color, boardId } });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
