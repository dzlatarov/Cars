import React from 'react'
import { useSelector } from 'react-redux'

const CarSpecification = () => {
    const currentCar = useSelector(state => state.cars.currentCar);
    
    return (
        <div>
            {currentCar && 'To do'}
        </div>
    )
}

export default CarSpecification
