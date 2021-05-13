import vechicle from '../apis/vehicle'

import {
    FETCH_CAR_BY_VIN,
    FETCH_CAR_MODELS,
} from './types'

export const fetchCarByVIN = term => async (dispatch) => {
    const response = await vechicle.get(`/DecodeVin/${term}?format=json`);

    dispatch({ type: FETCH_CAR_BY_VIN, payload: response.data });
};

export const fetchCarModels = () => async (dispatch, getState) => {
    const { make, year, vehicleType } = getState().term;
    const url = `/getmodelsformakeyear/make/${make}/modelyear/${year}/vehicleType/${vehicleType}?format=json`;
    const response = await vechicle.get(`${url}`);

    dispatch({ type: FETCH_CAR_MODELS, payload: response.data.Results });
};