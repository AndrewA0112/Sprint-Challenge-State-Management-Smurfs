import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS } from "../actions";

const initialState = {
    smurfs: [],
    error: '',
    isLoading: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            console.log('GET_SMURFS_START')
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS:
            console.log('GET_SMURFS_SUCCESS')
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            console.log('GET_SMURFS_FAILURE')
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            console.log('ADD_SMURF_START')
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            console.log('ADD_SMURF_SUCCESS')
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        default:
            return state
    }
}