import { SUBMIT_TERM } from '../actions/types'

export const termReducer = (state = '', action) => {
    switch (action.type) {
        case SUBMIT_TERM:
            return action.payload;
        default:
            return state;
    }
};