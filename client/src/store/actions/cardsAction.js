import axios from 'axios'
import { ADD_CARD } from './types';
import { returnErrors } from './errorAction'


//add new  list
export const addCard = (card, listId) => (dispatch, getState) => {
    axios
        .post(`/api/cards/${listId}`, card)
        .then(res => {
            console.log(res.data)
            dispatch({ type: ADD_CARD, payload: res.data })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}