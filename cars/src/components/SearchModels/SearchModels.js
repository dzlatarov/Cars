import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { fetchCarModels } from '../../actions'
import Input from '../Input/Input'
import SelectTag from '../SelectTag/SelectTag'

const SearchModels = () => {
    const dispatch = useDispatch();

    const onSubmitHandler = formValues => {
        console.log(formValues);
        // dispatch(fetchCarModels(formValues));
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
            {formik => (
                <div>
                    <Form>
                        <Input label="Car Make" name="make" type="text" />
                        <Input label="Car Year" name="year" type="text" />                        
                        <SelectTag
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                        />
                        <button type="submit">Submit</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SearchModels