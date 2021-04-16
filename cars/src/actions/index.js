import vechicle from '../apis/vehicle'
import { FETCH_CARS, SUBMIT_TERM, FETCH_CARS_BY_VIN } from './types'

export const fetchCarsByVIN = term => async (dispatch) => {
    const response = await vechicle.get(`/GetMakeForManufacturer/${term}?format=json`);

    dispatch({ type: FETCH_CARS_BY_VIN, payload: response.data });
};

export const fetchCars = () => async (dispatch) => {
    const response = await vechicle.get('/getallmakes?format=json');

    dispatch({ type: FETCH_CARS, payload: response.data.Results});
};

export const submitTerm = term => {
    return {
        type: SUBMIT_TERM,
        payload: term
    }
};