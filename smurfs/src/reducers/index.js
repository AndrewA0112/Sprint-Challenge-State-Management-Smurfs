import { GET_SMURFS_START, GET_SMURFS_SUCCESS } from "../actions";

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
        default:
            return state
    }
}