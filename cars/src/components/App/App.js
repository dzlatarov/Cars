import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CarDetails from '../CarDetails/CarModels';
import SearchModels from '../SearchModels/SearchModels'
import Header from '../Header/Header'
import './App.css'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/cars/search" exact component={SearchModels} />
                <Route path="/cars/search" exact component={CarDetails} />
            </BrowserRouter>
        </div>
    );
}

export default App