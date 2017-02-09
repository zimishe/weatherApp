/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'
import { connect } from 'react-redux'

import {setCityToShow} from './../actions/setCityToShow.js'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onClick: (event) => {
            let receivedCity = event.target.getAttribute('data-city').toString();
            event.persist();

            let stDate = new Date().setMonth(new Date().getMonth() - 1);

            const xhr = new XMLHttpRequest(),
                appID = '23722e5a294348674ba0d24c7f6a1497',
                units = 'metric',
                start = stDate.toString(),
                end = (+new Date()).toString(),
                host = 'http://api.openweathermap.org/data/2.5/forecast/',
                url = host+'city?id='+receivedCity+'&units='+units+'&start='+start+'&end='+end+'&APPID='+appID;
            
            const sessionData = localStorage.getItem('weather');

            xhr.open('GET', url, true);

            // eslint-disable-next-line
            let dataParsed;

            if (sessionData == null || receivedCity !== undefined) {
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

                            dispatch(setCityToShow(event))
                        }   else {
                            // alert('Server is not responding')
                            
                            console.log('Error: ', response.cod);
                        }
                    }
                };

            }   else {
                // return dataParsed = JSON.parse(sessionStorage.getItem('weather'));
                return dataParsed = JSON.parse(localStorage.getItem('weather'));
            }
        }
    };
};

const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};

class ChooseCity extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <ul className="header__city-select">
                {
                    data.citiesList.map(
                        (el, i) =>
                            <li key={i}>
                                <a 
                                    data-city={el.code} 
                                    data-caption={el.city} 
                                    onClick={this.props.onClick.bind(this)}>
                                    {el.city}
                                </a>
                            </li>
                    )
                }
            </ul>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseCity)