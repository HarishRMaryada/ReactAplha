import { createStore } from 'redux'

import Reducer from './Reducers/index'

var Store = createStore(Reducer)

export default Store