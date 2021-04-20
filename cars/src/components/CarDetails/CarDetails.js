import React from 'react'
import { useSelector } from 'react-redux'

const CarDetails = (props) => {
    const cars = useSelector(state => state.cars);    

    return (
        <div>
            CarDetails
        </div>
    )
}

export default CarDetails;
