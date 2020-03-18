import {  FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,} from '../actions/index'


export const initialState = {
    friends: [],
    list: 'Friends',
    error: '',
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: 'Something went wrong...Try again',

            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                friends: action.payload
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: 'Failed to Load',
            };

        default:
            return state;
    }
}