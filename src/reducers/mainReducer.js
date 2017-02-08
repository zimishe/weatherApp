/**
 * Created by eugene on 07.02.17.
 */

import initialState from './../initialState.js'
import store from './../store.js'
import {getData} from './../getData.js'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CITY' : return {
            itemsToShow: store.getState().itemsToShow,
            weatherData: getData(),
            itemsShow: store.getState().itemsShow,
            cityToShow: action.receivedCity,
            citiesList: store.getState().citiesList
        };
        case 'SET_ITEMS_TO_SHOW' : return {
            itemsToShow: action.receivedItems,
            weatherData: store.getState().weatherData,
            itemsShow: store.getState().itemsShow,
            cityToShow: store.getState().cityToShow,
            citiesList: store.getState().citiesList
        };

        default : return state
    }
};

export default reducer