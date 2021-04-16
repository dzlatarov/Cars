import React from 'react'
import CarList from '../CarList/CarList'
import SearchBar from '../SearchBar';
import './App.css'

const App = () => {
    return (
        <div className="">
            <SearchBar />
            <CarList />
        </div>
    );
}

export default App