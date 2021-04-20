import vechicle from '../apis/vehicle'

import {
    FETCH_CARS,
    SUBMIT_TERM,
    FETCH_CARS_BY_VIN,
    FETCH_CAR_MODELS,
    SUBMIT_MAKE,
    SUBMIT_MODEL,
    SUBMIT_YEAR,
    SUBMIT_VEHICLE_TYPE
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

export const fetchCarModels = () => async (dispatch, getState) => {
    const { make, year, vehicleType } = getState().term;
    const url = `/getmodelsformakeyear/make/${make}/modelyear/${year}/vehicleType/${vehicleType}?format=json`;
    const response = await vechicle.get(`${url}`);

    dispatch({ type: FETCH_CAR_MODELS, payload: response.data.Results });
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

export const submitType = type => {
    return {
        type: SUBMIT_VEHICLE_TYPE,
        payload: type
    }
};