/**
 * Created by eugene on 20.02.17.
 */

import {renderMain} from './index'
import initialState from './initialState'

export function getInitialData() {
    let stDate = new Date().setMonth(new Date().getMonth() - 1);

    const xhr = new XMLHttpRequest(),
        appID = '23722e5a294348674ba0d24c7f6a1497',
        units = 'metric',
        cityId = '702550',
        start = stDate.toString(),
        end = (+new Date()).toString(),
        host = 'http://api.openweathermap.org/data/2.5/forecast/',
        url = host+'city?id='+cityId+'&units='+units+'&start='+start+'&end='+end+'&APPID='+appID;

    // const sessionData = sessionStorage.getItem('weather');
    const sessionData = localStorage.getItem('weather');

    xhr.open('GET', url, true);

    if (sessionData == null) {
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log('status', xhr.status);
            }   else {
                let response = JSON.parse(xhr.response);

                if (response.cod === '200') {
                    console.log('Data received');
                    localStorage.setItem('weather', JSON.stringify(response));

                    initialState.weatherData = response;
                    
                    renderMain();

                    console.log('Data set to localStorage');
                }   else {
                    console.log('Error: ', response.cod);
                    alert('Failed to load data, please reload page or try later')
                }
            }
        };
    }   else {
        initialState.weatherData = JSON.parse(sessionData);

        renderMain();
    }
}