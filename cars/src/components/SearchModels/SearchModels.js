import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { fetchCarModels } from '../../actions'

const SearchModels = () => {
    const dispatch = useDispatch();

    const apiCall = () => {
        dispatch(fetchCarModels());
    }

    return (
        <Formik>
            <div>
                <Form>

                </Form>
            </div>
        </Formik>

        // <div className="ui segment">
        //     <div className="ui form">
        //         <div className="fields">
        //             <div className="field">
        //                 <label>Make</label>
        //                 <input
        //                     type="text"
        //                 />
        //             </div>
        //             <div className="field">
        //                 <label>Year</label>
        //                 <input
        //                     type="text"
        //                 />
        //             </div>
        //             <div className="field">
        //                 <label>Type</label>
        //                 <input
        //                     type="text"
        //                 />
        //             </div>
        //             <div className="ui button" onClick={apiCall}>Submit</div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SearchModels