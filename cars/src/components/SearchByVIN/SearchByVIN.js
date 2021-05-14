import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import Input from '../Input/Input';
import { fetchCarByVIN } from '../../actions/index'

const SearchByVIN = () => {
    const dispatch = useDispatch();

    const onSubmitHandler = vinNumber => {        
        dispatch(fetchCarByVIN(vinNumber));
    };

    return (
        <Formik
            initialValues={{
                vin: ''
            }}
            onSubmit={values => {
                onSubmitHandler(values);
            }}
        >
            {formik => (
                <div>                    
                    <Form>
                        <Input label="VIN Number" name="vin" type="text" />
                        <button type="submit">Submit</button>
                    </Form>
                </div >
            )}
        </Formik >
    );
}

export default SearchByVIN;