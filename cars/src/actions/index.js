import axios from 'axios'

export const fetchCars = () => async (dispatch) => {
    const response = await axios.get();

    dispatch({ type: FETCH_CARS, payload: response.data });
};