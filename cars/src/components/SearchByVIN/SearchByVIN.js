import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SearchBar = () => {    
    const dispatch = useDispatch();

    const onChange = term => {
        dispatch(submitTerm(term));
    };

    return (
        <div className="ui segment">
            <label>Car Search</label>
            <div className="ui fluid action input" >
                <input
                    autoComplete="off"
                    type="text"
                />
            </div>
        </div >
    );
}

export default SearchBar;