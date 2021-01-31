import axios from 'axios'
import { ADD_CARD, LOAD_CARDS, DELETE_CARD } from './types';
import { returnErrors } from './errorAction'


//get all cards
export const loadCards = (listId) => (dispatch, getState) => {
    axios
        .get(`/api/cards/${listId}`)
        .then(res => {
            dispatch(getCard(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//add new  list
export const addCard = (card, listId) => (dispatch, getState) => {
    axios
        .post(`/api/cards/${listId}`, card)
        .then(res => {
            dispatch({ type: ADD_CARD, payload: res.data })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//delete card
export const deleteCard = (cardId, listId) => (dispatch, getState) => {
    axios
        .delete(`/api/cards/${cardId}/${listId}`)
        .then(res => {
            //console.log(res.data)
            dispatch({ type: DELETE_CARD, payload: { cardId, listId } })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


//add new  list
export const getCard = (card) => (dispatch, getState) => {
    card.map((d) => {
        const x = {
            [d._id]: {
                id: d._id,
                text: d.text,
                description: d.description,
                labels: d.labels,
                dueDate: d.dueDate,
                list: d.list
            }
        }
        dispatch({ type: LOAD_CARDS, payload: x[d._id] })
        return null
    })
}