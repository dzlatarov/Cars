const initialState = {
    searchTerm: '',
    cars: []
};
export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return [...state.cars, action.payload];
        default:
            return state;
    }
};