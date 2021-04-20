import vechicle from '../apis/vehicle'

import {
    FETCH_CARS,
    SUBMIT_TERM,
    FETCH_CARS_BY_VIN,
    FETCH_CAR_MODELS,
    SUBMIT_MAKE,
    SUBMIT_MODEL,
    SUBMIT_YEAR
} from './types'

export const fetchCarsByVIN = term => async (dispatch) => {
    const response = await vechicle.get(`/decode/vin`, {
        params: {
            "vin": term
        }
    });

    dispatch({ type: FETCH_CARS_BY_VIN, payload: response.data });
};

export const fetchCars = car => {
    return {
        type: FETCH_CARS,
        payload: car
    }
};

export const fetchCarModels = detail => async (dispatch, getState) => {
    console.log(getState());
    const url = `GetModelsForMakeYear/make/${detail.make}/modelyear/${detail.year}?format=json`;
    const response = await vechicle.get(`/${url}`);
    console.log(response.data.Results);
    // dispatch({ type: FETCH_CAR_MODELS, payload: response.data.Results });
};

export const submitTerm = vin => {
    return {
        type: SUBMIT_TERM,
        payload: vin
    }
};

export const submitMake = make => {
    return {
        type: SUBMIT_MAKE,
        payload: make
    }
};

export const submitModel = model => {
    return {
        type: SUBMIT_MODEL,
        payload: model
    }
};

export const submitYear = year => {
    return {
        type: SUBMIT_YEAR,
        payload: year
    }
};