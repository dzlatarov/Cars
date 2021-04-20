import React from 'react'
import { useSelector } from 'react-redux'

const CarDetails = () => {
    const cars = useSelector(state => state.cars[0]);
    const renderCars = () => {
        if (cars) {
            return cars.map(car => {
                return (
                    <div className="" key={car.Model_ID}>
                        <div className="">
                            <div className="">
                                {car.Make_Name}
                            </div>
                            <div className="">
                                <p>{car.Model_Name}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return <div>Loading...</div>
    };

    return (
        <div className="">
            {renderCars()}
        </div>
    );
};

export default CarDetails;
