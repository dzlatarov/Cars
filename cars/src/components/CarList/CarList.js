import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../../actions'
import './CarList.css'

const CarList = () => {
    const allCars = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
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

export default CarList