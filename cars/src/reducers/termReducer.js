import { SUBMIT_TERM, SUBMIT_DETAILS } from '../actions/types'

const initialState = {
    car: {
        make: '',
        model: '',
        year: ''
    },
    term: ''
};

export const termReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_TERM:
            return { ...state, term: action.payload };
        case SUBMIT_DETAILS:
            return {
                ...state, ...state.car,
                make: action.payload.make,
                model: action.payload.model,
                year: action.payload.year
            };
        default:
            return state;
    }
};