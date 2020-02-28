import {createStore} from 'redux'
import reducer from '../store/reducer.js'

let store = createStore(reducer);

export default store;