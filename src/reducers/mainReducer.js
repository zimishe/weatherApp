/**
 * Created by eugene on 07.02.17.
 */

let reducer = function reducer(state = {}, action) {
    switch (action.type) {
        case 'CHANGE_CITY' : return {
            itemsToShow: state.itemsToShow,
            weatherData: state.weatherData,
            itemsShow: state.itemsShow,
            cityToShow: action.receivedCity,
            citiesList: state.citiesList
        };
        case 'SET_ITEMS_TO_SHOW' : return {
            itemsToShow: action.receivedItems,
            weatherData: state.weatherData,
            itemsShow: state.itemsShow,
            cityToShow: state.cityToShow,
            citiesList: state.citiesList
        };

        default : return state
    }
};

export default reducer