import axios from 'axios'
import { LOAD_LISTS, ADD_LIST } from './types';
import Axios from 'axios';
import { returnErrors } from './errorAction'


//load lists
export const loadLists = (lists) => async (dispatch, getState) => {
    await dispatch({ type: LOAD_LISTS, payload: lists })
}

//add new  list
export const addList = (list) => (dispatch, getState) => {
    const boardId = getState().activeBoard.id;
    axios
        .post(`/api/lists/${boardId}`, list)
        .then(res => {
            dispatch({ type: ADD_LIST, payload: res.data })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


