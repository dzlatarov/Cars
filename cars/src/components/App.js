import React from 'react'
import CarList from './CarList'
import SearchBar from './SearchBar';

const App = () => {
    return (
        <div className="ui container">
            <SearchBar />
            <CarList />
        </div>
    );
}

export default App