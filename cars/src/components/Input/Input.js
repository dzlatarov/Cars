import React from 'react'
import { useField } from 'formik'

const Input = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <div>
            <label>{label}</label>
            <input {...field} {...props} />
        </div>
    )
}

export default Input
