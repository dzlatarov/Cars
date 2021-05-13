import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCarModels } from '../../actions'

const SearchModels = () => {    
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
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <input
                            type="text"
                        />
                    </div>
                    <div className="field">
                        <label>Type</label>
                        <input
                            type="text"
                        />
                    </div>
                    <div className="ui button" onClick={apiCall}>Submit</div>
                </div>
            </div>
        </div>
    )
}

export default SearchModels