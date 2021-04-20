import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarsByVIN } from '../../actions'
import './CarList.css'

const CarList = () => {
    // const allCars = useSelector(state => state.cars);
    const vinNumber = useSelector(state => state.term.term);
    const dispatch = useDispatch();

    useEffect(() => {
        if (vinNumber) {
            dispatch(fetchCarsByVIN(vinNumber));
        }
        // dispatch(fetchCars());
        // eslint-disable-next-line
    }, [vinNumber])

    // const renderCars = allCars.map(cars => cars.slice(0, 500).map(car => {
    //     return (
    //         <ul className="main-cars__items" key={car.Make_ID}>
    //             <li className="content">
    //                 <div>
    //                     <i className="ui large car middle aligned icon"></i>
    //                 </div>
    //                 <a href="/" className="header">{car.Make_ID}</a>
    //                 <div className="description">{car.Make_Name}</div>
    //             </li>
    //         </ul>
    //     )
    // }));

    return (
        <div className="main-cars">
            Car list
        </div>
    );
}

export default CarList