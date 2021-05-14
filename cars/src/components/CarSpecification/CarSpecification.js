import React from 'react'
import { useSelector } from 'react-redux'

const CarSpecification = () => {
    const specifications = useSelector(state => state.cars.specifications);

    const model = specifications.find(spec => spec.Variable === 'Model');
    const make = specifications.find(spec => spec.Variable === 'Make');
    const manufacturer = specifications.find(spec => spec.Variable === 'Manufacturer Name');
    const year = specifications.find(spec => spec.Variable === 'Model Year');
    const type = specifications.find(spec => spec.Variable === 'Vehicle Type');

    console.log(specifications);    
    return (
        <div>
            {
                specifications && (
                    <div>
                        <>
                            <div>{model ? model.Value : ' '}</div>
                            <div>{make ? make.Value : ' '}</div>
                            <div>{manufacturer ? manufacturer.Value : ' '}</div>
                            <div>{year ? year.Value : ' '}</div>
                            <div>{type ? type.Value : ' '}</div>
                        </>                        
                    </div>
                )}
        </div >
    )
}

export default CarSpecification
