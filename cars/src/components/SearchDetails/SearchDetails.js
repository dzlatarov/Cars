import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitMake, submitYear, fetchCarModels, submitType } from '../../actions'

const SearchDetails = () => {
    const term = useSelector(state => state.term);
    const dispatch = useDispatch();

    const apiCall = () => {
        dispatch(fetchCarModels());
    }

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Make</label>
                        <input
                            type="text"
                            value={term.make}
                            onChange={(e) => dispatch(submitMake(e.target.value))}
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <input
                            type="text"
                            value={term.year}
                            onChange={(e) => dispatch(submitYear(e.target.value))}
                        />
                    </div>
                    <div className="field">
                        <label>Type</label>
                        <input
                            type="text"
                            value={term.vehicleType}
                            onChange={(e) => dispatch(submitType(e.target.value))}
                        />
                    </div>
                    <button onClick={apiCall} className="ui button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SearchDetails