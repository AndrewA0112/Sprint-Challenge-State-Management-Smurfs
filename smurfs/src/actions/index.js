import axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'

export const getSmurfList = () => {
    return dispatch => {
        dispatch({type: GET_SMURFS_START})
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(response => {
                console.log(response.data)
                dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: GET_SMURFS_FAILURE, payload: error })
            })
    }
}