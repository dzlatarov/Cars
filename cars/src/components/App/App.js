import React from 'react'
import CarDetails from '../CarDetails/CarDetails';
import SearchDetails from '../SearchDetails/SearchDetails';
import './App.css'

const App = () => {
    return (
        <div>
            <SearchDetails />
            <CarDetails />
        </div>
    );
}

export default App