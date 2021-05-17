import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { fetchCarModels } from '../../actions'
import Input from '../Input/Input'

const SearchModels = () => {
    const dispatch = useDispatch();

    const onSubmitHandler = formValues => {        
         dispatch(fetchCarModels(formValues));
    }

    return (
        <Formik
            initialValues={{
                make: '',
                year: '',
                type: ''
            }}
            onSubmit={onSubmitHandler}
        >
            <div>
                <Form>
                    <Input label="Car Make" name="make" type="text" />
                    <Input label="Car Year" name="year" type="text" />
                    <Input label="Car Type" name="type" type="text" />
                    <button type="submit">Submit</button>
                </Form>
            </div>
        </Formik>        
    )
}

export default SearchModels