import { FETCH_CARS } from '../actions/types'


export const carReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CARS:
            return [...state, action.payload];
        default:
            return state;
    }
};
