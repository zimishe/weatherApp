/**
 * Created by eugene on 07.02.17.
 */

export function getData(cityId) {
    // let cityId = '702550';
    // console.log('sss', cityId);
    
    let stDate = new Date().setMonth(new Date().getMonth() - 1);
    
    const xhr = new XMLHttpRequest(),
        appID = '23722e5a294348674ba0d24c7f6a1497',
        units = 'metric',
        start = stDate.toString(),
        end = (+new Date()).toString(),
        host = 'http://api.openweathermap.org/data/2.5/forecast/',
        url = host+'city?id='+cityId+'&units='+units+'&start='+start+'&end='+end+'&APPID='+appID;

    // const sessionData = sessionStorage.getItem('weather');
    const sessionData = localStorage.getItem('weather');
    
    xhr.open('GET', url, true);
    
    // eslint-disable-next-line
    let dataParsed;

    if (sessionData == null || cityId !== undefined) {
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log('status', xhr.status);
            }   else {
                let response = JSON.parse(xhr.response);

                if (response.cod === '200') {
                    console.log('Data received');
                    // sessionStorage.setItem('weather', JSON.stringify(response));
                    localStorage.setItem('weather', JSON.stringify(response));

                    console.log('Data set to sessionStorage');
                }   else {
                    console.log('Error: ', response.cod);
                }
            }
        };

    }   else {
        // return dataParsed = JSON.parse(sessionStorage.getItem('weather'));
        return dataParsed = JSON.parse(localStorage.getItem('weather'));
    }
}