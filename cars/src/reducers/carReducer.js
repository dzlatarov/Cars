import { FETCH_CARS, FETCH_CARS_BY_VIN, FETCH_CAR_MODELS } from '../actions/types'

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
            return [...state.cars, action.payload];
        case FETCH_CAR_MODELS:
            return [...state.cars, action.payload];
        default:
            return state;
    }
};
