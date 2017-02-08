/**
 * Created by eugene on 07.02.17.
 */

export function getData(cityId) {
    // let cityId = '702550';
    // console.log('sss', cityId);

    const xhr = new XMLHttpRequest(),
        host = 'http://api.openweathermap.org/data/2.5/forecast/city?id='+cityId+'&units=metric&APPID=23722e5a294348674ba0d24c7f6a1497';

    // const sessionData = sessionStorage.getItem('weather');
    const sessionData = localStorage.getItem('weather');


    xhr.open('GET', host, true);
    
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