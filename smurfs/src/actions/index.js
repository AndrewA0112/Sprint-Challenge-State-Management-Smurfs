import axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
export const UPDATE_SMURF_START = 'UPDATE_SMURF_UPDATE'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE'
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

export const getSmurfList = () => {
    return dispatch => {
        dispatch({ type: GET_SMURFS_START })
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(response => {
                dispatch({ type: GET_SMURFS_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: GET_SMURFS_FAILURE, payload: error })
            })
    }
}

export const addSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: ADD_SMURF_START })
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(response => {
                dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: ADD_SMURF_FAILURE, payload: error })
            })
    }
}

export const updateSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: UPDATE_SMURF_START })
        axios
            .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
            .then(response => {
                dispatch({ type: UPDATE_SMURF_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: UPDATE_SMURF_FAILURE, payload: error })
            })
    }
}

export const deleteSmurf = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_SMURF_START })
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: DELETE_SMURF_FAILURE, payload: error })
            })
    }
}