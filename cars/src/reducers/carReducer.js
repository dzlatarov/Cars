import { FETCH_CAR_BY_VIN, FETCH_CAR_MODELS } from '../actions/types'

const initialState = {
    cars: [],
    currentCar: {}
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {        
        case FETCH_CAR_BY_VIN:
            return {
                ...state,
                currentCar: action.payload
            };
        case FETCH_CAR_MODELS:
            return [{ ...state.cars, ...action.payload }];
        default:
            return state;
    }
};
