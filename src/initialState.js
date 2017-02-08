/**
 * Created by eugene on 08.02.17.
 */
import {getData} from './getData.js'

const toShowArr = [4, 10, 15];

const citiesList = [
    {
        city: 'Lviv',
        code: 702550
    },
    {
        city: 'Kyiv',
        code: 703448
    },
    {
        city: 'Zhytomyr',
        code: 686967
    }
];

const initialState = {
    weatherData: getData(),
    cityToShow: 702550,
    itemsToShow: 10,
    itemsShow: toShowArr,
    citiesList: citiesList
};

export default initialState

