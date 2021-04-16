import React from 'react'
import { connect } from 'react-redux'
import { submitMake, submitModel, submitYear } from '../../actions'

const SearchDetails = ({ term, submitMake, submitModel, submitYear }) => {
    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>Make</label>
                        <input
                            type="text"
                            value={term.make}
                            onChange={(e) => submitMake(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Model</label>
                        <input
                            type="text"
                            value={term.model}
                            onChange={(e) => submitModel(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Year</label>
                        <input
                            type="text"
                            value={term.year}
                            onChange={(e) => submitYear(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        term: state
    };
};

export default connect(mapStateToProps, {
    submitMake,
    submitModel,
    submitYear
})(SearchDetails)
