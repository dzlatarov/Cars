import React from 'react'
import { useSelector } from 'react-redux'
import './CarModels.css'

const CarModels = () => {
    const carsObject = useSelector(state => state.cars[0]);
    const cars = carsObject ? Object.values(carsObject) : null;
    const renderCars = () => {
        if (cars) {
            return cars.map(car => {
                return (
                    <li className="car-model__item" key={car.Model_ID}>
                        <div className="car-model__content">
                            <div className="car-model__header">
                                Manufacturer: {car.Make_Name}
                            </div>
                            <div className="car-model__description">
                                <p>Model: {car.Model_Name}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }

        return null;
    };

    return (
        <ul className="car-models__items">
            {renderCars()}
        </ul>
    );
};

export default CarModels;