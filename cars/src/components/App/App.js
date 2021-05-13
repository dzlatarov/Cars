import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CarDetails from '../CarModels/CarModels';
import SearchModels from '../SearchModels/SearchModels'
import SearchByVIN from '../SearchByVIN/SearchByVIN'
import Header from '../Header/Header'
import './App.css'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/cars/search/models" exact component={SearchModels} />
                <Route path="/cars/search/models" exact component={CarDetails} />
                <Route path="/cars/search/vin" exact component={SearchByVIN} />
            </BrowserRouter>
        </div>
    );
}

export default App