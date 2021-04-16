import { FETCH_CARS, FETCH_CARS_BY_VIN, FETCH_CAR } from '../actions/types'


export const carReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CARS_BY_VIN:
            return [...state, action.payload];
        case FETCH_CARS:
            return [...state, action.payload];
        case FETCH_CAR:
            return [...state, action.payload];
        default:
            return state;
    }
};
