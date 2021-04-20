import React from 'react'
import { connect } from 'react-redux'
import { fetchCarModels } from '../../actions'

const CarDetails = (props) => {
    return (
        <div>
            CarDetails
        </div>
    )
}

const mapStateToProps = state => {
    return {
        car: state.cars.car,
        terms: state.term
    }
};

export default connect(mapStateToProps, { fetchCarModels })(CarDetails)
