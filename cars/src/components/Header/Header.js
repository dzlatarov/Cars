import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/cars/search/models" className="item">
                Search Models
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Search by VIN number
            </Link>
            </div>
        </div>
    )
}

export default Header;
