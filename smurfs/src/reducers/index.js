import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE, ADD_SMURF_FAILURE, UPDATE_SMURF_START, UPDATE_SMURF_SUCCESS, UPDATE_SMURF_FAILURE } from "../actions";

const initialState = {
    smurfs: [],
    error: '',
    isLoading: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            console.log(GET_SMURFS_START)
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS:
            console.log(GET_SMURFS_SUCCESS)
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            console.log(GET_SMURFS_FAILURE)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            console.log(ADD_SMURF_START)
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            console.log(ADD_SMURF_SUCCESS)
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case ADD_SMURF_FAILURE:
            console.log(ADD_SMURF_FAILURE)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_SMURF_START:
            console.log(DELETE_SMURF_START)
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_SMURF_SUCCESS:
            console.log(DELETE_SMURF_SUCCESS)
            return {
                ...state,
                isLoading: true,
                error: '',
                smurfs: action.payload
            }
        case DELETE_SMURF_FAILURE:
            console.log(DELETE_SMURF_FAILURE)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_SMURF_START:
            console.log(UPDATE_SMURF_START)
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case UPDATE_SMURF_SUCCESS:
            console.log(UPDATE_SMURF_START)
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case UPDATE_SMURF_FAILURE:
            console.log(UPDATE_SMURF_FAILURE)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}