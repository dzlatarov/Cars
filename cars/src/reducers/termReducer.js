import {
    SUBMIT_TERM,
    SUBMIT_MAKE,
    SUBMIT_MODEL,
    SUBMIT_YEAR
} from '../actions/types'

const initialState = {
    make: '',
    model: '',
    year: '',  
    term: ''
};

export const termReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_TERM:
            return { ...state, term: action.payload };
        case SUBMIT_MAKE:
            return { ...state, make: action.payload }
        case SUBMIT_MODEL:
            return { ...state, model: action.payload }
        case SUBMIT_YEAR:
            return { ...state, year: action.payload }
        default:
            return state;
    }
};