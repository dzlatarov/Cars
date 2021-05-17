import React from 'react'
import { useSelector } from 'react-redux'
import './CarModels.css'

const CarModels = () => {
    const models = useSelector(state => state.cars.models);       

    return (
        <ul className="car-models__items">
            {models.length > 0 && (
                models.map(model => (
                    <li key={model.Model_ID}>
                        <div>
                            Manufacturer: {model.Make_Name}
                        </div>
                        <div>
                            Model: {model.Model_Name}
                        </div>
                        <div>
                            Type: {model.VehicleTypeName}
                        </div>
                    </li>
                ))
            )}
        </ul>
    );
};

export default CarModels;
