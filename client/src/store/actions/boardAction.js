import axios from 'axios'

export const getBoards = () => (dispatch, getState) => {
    dispatch(setLoading())
    axios
        .get('/api/todos', tokenConfig(getState))
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}