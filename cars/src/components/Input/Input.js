import React from 'react'
import { useField } from 'formik'

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    return (
        <div>
            <label>{label}</label>
            <input {...field} {...props} />
        </div>
    )
}

export default Input
