import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitTerm } from '../../actions'

const SearchBar = () => {
    const term = useSelector(state => state.term.term);
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
                    value={term}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div >
    );
}

export default SearchBar;