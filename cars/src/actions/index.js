import vechicle from '../apis/vehicle'
import shine from '../apis/shine'
import { KEY } from '../apis/Config'

import {
    FETCH_CARS,
    SUBMIT_TERM,
    FETCH_CARS_BY_VIN,
    FETCH_CAR,
    SUBMIT_MAKE,
    SUBMIT_MODEL,
    SUBMIT_YEAR
} from './types'

export const fetchCarsByVIN = term => async (dispatch) => {
    const response = await vechicle.get(`/GetMakeForManufacturer/${term}?format=json`);

    dispatch({ type: FETCH_CARS_BY_VIN, payload: response.data });
};

export const fetchCars = () => async (dispatch) => {
    const response = await vechicle.get('/getallmakes?format=json');

    dispatch({ type: FETCH_CARS, payload: response.data.Results });
};

export const fetchCarDetails = detail => async dispatch => {
    const response = await shine.get('/specs', {
        params: {
            make: detail.make,
            model: detail.model,
            year: detail.year,
            fullData: 'true',
            apikey: KEY
        }
    })

    dispatch({ type: FETCH_CAR, payload: response.data });
};

export const submitTerm = term => {
    return {
        type: SUBMIT_TERM,
        payload: term
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