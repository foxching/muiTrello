import axios from 'axios'
import { ADD_BOARDS, BOARDS_LOADING, CLEAR_BOARDS } from './types';
import { returnErrors } from './errorAction'

//get all boards 
export const addBoards = (boards) => (dispatch, getState) => {
    dispatch({ type: ADD_BOARDS, payload: boards })
}