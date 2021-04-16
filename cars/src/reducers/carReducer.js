import { FETCH_CARS, FETCH_CARS_BY_VIN, FETCH_CAR } from '../actions/types'

const initialState = {
    car: {},
    cars: []
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS_BY_VIN:
            //To do
            return state;
        case FETCH_CARS:
            return [...state, ...state.cars, action.payload];
        case FETCH_CAR:
            return [...state, ...state.car, action.payload];
        default:
            return state;
    }
};
