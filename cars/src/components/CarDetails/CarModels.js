import React from 'react'
import { useSelector } from 'react-redux'
import './CarModels.css'

const CarDetails = () => {
    const cars = useSelector(state => state.cars[0]);
    const renderCars = () => {
        if (cars) {
            return cars.map(car => {
                return (
                    <li className="car-model__item" key={car.Model_ID}>
                        <div className="car-model__content">
                            <div className="car-model__header">
                                {car.Make_Name}
                            </div>
                            <div className="car-model__description">
                                <p>{car.Model_Name}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }

        return <div>Loading...</div>
    };

    return (
        <ul className="car-models__items">
            {renderCars()}
        </ul>
    );
};

export default CarDetails;
