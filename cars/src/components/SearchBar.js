import React from 'react'

const SearchBar = () => {
    return (
        <div className="ui segment" style={{ marginTop: '1em' }}>
            <label>Car Search</label>
            <div className="ui fluid action input" >
                <input type="text" placeholder="Search..." />
                <div className="ui button primary">Search</div>
            </div>
        </div>
    );
}

export default SearchBar
