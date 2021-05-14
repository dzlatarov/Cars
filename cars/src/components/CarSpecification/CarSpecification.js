import React from 'react'
import { useSelector } from 'react-redux'

const CarSpecification = () => {
    const specifications = useSelector(state => state.cars.specifications);

    const model = specifications.find(spec => spec.Variable === 'Model');
    const make = specifications.find(spec => spec.Variable === 'Make');
    const manufacturer = specifications.find(spec => spec.Variable === 'Manufacturer Name');
    const year = specifications.find(spec => spec.Variable === 'Model Year');
    const type = specifications.find(spec => spec.Variable === 'Vehicle Type');
       
    return (
        <div>
            {
                specifications && (
                    <div>
                        <>
                            <div>Car Model: {model ? model.Value : ' '}</div>
                            <div>Car Make: {make ? make.Value : ' '}</div>
                            <div>Car Manufacturer: {manufacturer ? manufacturer.Value : ' '}</div>
                            <div>Car Year: {year ? year.Value : ' '}</div>
                            <div>Car Type: {type ? type.Value : ' '}</div>
                        </>                        
                    </div>
                )}
        </div >
    )
}

export default CarSpecification
