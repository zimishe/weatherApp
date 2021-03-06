import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import './reducers/mainReducer'
import store from './store'
import {getInitialData} from './getInitialData'
import './../assets/css/compressed/style.css'

getInitialData();

export function renderMain() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}







