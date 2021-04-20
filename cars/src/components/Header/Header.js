import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/cars/search" className="item">
                Search by Make Year and Type
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Canadian Search
            </Link>
            </div>
        </div>
    )
}

export default Header;
