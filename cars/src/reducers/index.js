import { combineReducers } from 'redux'
import { carReducer } from './carReducer'
import { termReducer } from './termReducer'

export default combineReducers({
    cars: carReducer,    
    term: termReducer
})