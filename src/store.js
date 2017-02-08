/**
 * Created by eugene on 07.02.17.
 */
import { createStore } from 'redux'
import reducer from './reducers/mainReducer'
import initialState from './initialState.js'

let store = createStore(reducer, initialState);

export default store
