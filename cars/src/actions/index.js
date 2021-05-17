import vechicle from '../apis/vehicle'

import {
    FETCH_CAR_BY_VIN,
    FETCH_CAR_MODELS,
} from './types'

export const fetchCarByVIN = vinNumber => async (dispatch) => {
    const response = await vechicle.get(`/decodevin/${vinNumber.vin}?format=json`);
    const data = response.data.Results.filter(result => result.Value !== null && result.Value !== 'Not Applicable' && result.Value !== '' && result.Value !== '0');

    dispatch({ type: FETCH_CAR_BY_VIN, payload: data });
};

export const fetchCarModels = (formValues) => async (dispatch) => {
    const url = `/getmodelsformakeyear/make/${formValues.make}/modelyear/${formValues.year}/vehicleType/${formValues.type}?format=json`;
    const response = await vechicle.get(`${url}`);

    dispatch({ type: FETCH_CAR_MODELS, payload: response.data.Results });
};