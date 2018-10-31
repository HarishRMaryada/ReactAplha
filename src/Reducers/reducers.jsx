import {combineReducers} from 'redux'
import {Action_TODO} from '../Actions/action'




function todos(state = [], action) {
    switch (action.type) {
    case Action_TODO:
    return [

    ]
    default:
    return state
    }
    }


const ReducerTodo = combineReducers({
    todos
})

export default ReducerTodo