import axios from 'axios'
import { LOAD_BOARDS, ADD_BOARD, SET_ACTIVE_BOARD } from './types';
import { returnErrors } from './errorAction'

//get all boards 
export const loadBoards = (boards) => (dispatch, getState) => {
    dispatch({ type: LOAD_BOARDS, payload: boards })
}

//add new  board
export const addBoard = (board) => (dispatch, getState) => {
    axios
        .post('/api/boards', board)
        .then(res => {
            dispatch({ type: ADD_BOARD, payload: res.data })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//get specific board detail
export const setActiveBoard = (boardId) => (dispatch, getState) => {
    //dispatch(setLoading())
    axios
        .get(`/api/boards/${boardId}`)
        .then(res => {
            dispatch({ type: SET_ACTIVE_BOARD, payload: res.data })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

