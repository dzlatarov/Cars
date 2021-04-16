import React from 'react'
import CarDetails from '../CarDetails/CarDetails';
import SearchBar from '../SearchBar/SearchBar';
import './App.css'

const App = () => {
    return (
        <div className="">
            <SearchBar />
            <CarDetails />
        </div>
    );
}

export default App