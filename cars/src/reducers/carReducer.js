import { FETCH_CAR_BY_VIN, FETCH_CAR_MODELS } from '../actions/types'

const initialState = {
    models: [],
    specifications: []
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAR_BY_VIN:
            return {
                ...state,
                specifications: action.payload
            };
        case FETCH_CAR_MODELS:
            return {
                ...state,
                models: action.payload
            }
        default:
            return state;
    }
};
