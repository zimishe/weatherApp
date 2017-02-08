/**
 * Created by eugene on 07.02.17.
 */

import initialState from './../initialState.js'
import store from './../store.js'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CITY' : return {
            itemsToShow: state.itemsToShow,
            weatherData: state.weatherData,
            itemsShow: state.itemsShow,
            cityToShow: action.receivedCity,
            citiesList: state.citiesList
        };
        case 'SET_ITEMS_TO_SHOW' :
            console.log('store', store.getState());
            return {
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