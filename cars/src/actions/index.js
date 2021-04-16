import vechicle from '../apis/vehicle'
import shine from '../apis/shine'
import { KEY } from '../apis/Config'

import { FETCH_CARS, SUBMIT_TERM, FETCH_CARS_BY_VIN, FETCH_CAR, SUBMIT_DETAILS } from './types'

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

export const submitDetails = details => {
    return {
        type: SUBMIT_DETAILS,
        payload: details
    }
};