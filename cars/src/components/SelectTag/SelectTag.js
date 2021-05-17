import React from 'react'

const SelectTag = ({ name, value, onChange }) => {
    return (
        <>
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="" label="Select a type"></option>
                <option value="Passenger Car" label="Passenger Car"></option>
                <option value="Truck" label="Truck"></option>
                <option value="Bus" label="Bus"></option>
                <option value="Motorcycle" label="Motorcycle"></option>
            </select>
        </>
    )
}

export default SelectTag
