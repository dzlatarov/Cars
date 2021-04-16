import React from 'react'
import { connect } from 'react-redux'
import { fetchCarDetails} from '../../actions'

const CarDetails = (props) => {
    return (
        <div>
            CarDetails
        </div>
    )
}

const mapStateToProps = state => {    
};

export default connect(mapStateToProps, { fetchCarDetails })(CarDetails)
