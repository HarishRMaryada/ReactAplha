import {combineReducers} from 'redux'
import authReducer from './Auth'



const Reducer = combineReducers({
    auth :authReducer
})

export default Reducer