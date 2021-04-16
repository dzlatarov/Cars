import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCars } from '../../actions'
import './CarList.css'

const CarList = ({ allCars, fetchCars }) => {
    console.log(allCars);
    useEffect(() => {
        fetchCars()
        // eslint-disable-next-line
    }, [])

    const renderCars = allCars.map(cars => cars.slice(0, 500).map(car => {
        return (
            <ul className="main-cars__items" key={car.Make_ID}>
                <li className="content">
                    <div>
                        <i className="ui large car middle aligned icon"></i>
                    </div>
                    <a href="/" className="header">{car.Make_ID}</a>
                    <div className="description">{car.Make_Name}</div>
                </li>
            </ul>
        )
    }));

    return (
        <div className="main-cars">
            {renderCars}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        allCars: state.cars
    }
};

export default connect(mapStateToProps, { fetchCars })(CarList);