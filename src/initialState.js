/**
 * Created by eugene on 08.02.17.
 */

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
    weatherData: {},
    cityToShow: 702550,
    itemsToShow: 7,
    itemsShow: toShowArr,
    citiesList: citiesList
};

export default initialState

