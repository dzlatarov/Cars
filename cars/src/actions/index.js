import vechicle from '../apis/vehicle'
import { FETCH_CARS, SUBMIT_TERM } from './types'

export const fetchCars = term => async (dispatch) => {
    const response = await vechicle.get(`/GetMakeForManufacturer/${term}?format=json`);

    dispatch({ type: FETCH_CARS, payload: response.data });
};

export const submitTerm = term => {
    return {
        type: SUBMIT_TERM,
        payload: term
    }
};