import React from 'react'
import { connect } from 'react-redux'
import { submitTerm } from '../actions'

const SearchBar = (props) => {
    const onChange = term => {
        props.submitTerm(term);
    };

    return (
        <div className="ui segment" style={{ marginTop: '1em' }}>
            <label>Car Search</label>
            <div className="ui fluid action input" >
                <input
                    autoComplete="off"
                    type="text"
                    value={props.term}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        term: state.term
    };
};

export default connect(mapStateToProps, { submitTerm })(SearchBar)