import { createStore } from 'redux'

import ReducerTodo from './Reducers/reducers'

var Store = createStore(ReducerTodo)

export default Store