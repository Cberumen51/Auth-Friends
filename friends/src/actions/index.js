import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'; 

export const submitButton = () => {
    return dispatch => {
        dispatch({type: FETCH_DATA_START});
        axios
        .get(`http://localhost:5000/api/friends`)

            .then(response => {
                console.log('Axios.get Response:', response.data)
                dispatch({type: FETCH_DATA_SUCCESS, payload: response.data})

            })

            .catch(error => {
                console.log('Axios.get Response:', error)
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.response})

            });
    }
}