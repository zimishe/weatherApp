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
        onChange: (event) => {
            let receivedCity = event.target.value.toString();
            event.persist();
            
            const xhr = new XMLHttpRequest(),
                host = 'http://api.openweathermap.org/data/2.5/forecast/city?id='+receivedCity+'&units=metric&APPID=23722e5a294348674ba0d24c7f6a1497';
            
            const sessionData = localStorage.getItem('weather');

            xhr.open('GET', host, true);

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
            <select defaultValue="" className="city-select" onChange={this.props.onChange.bind(this)}>
                <option value="" disabled>Select your option</option>
                {
                    data.citiesList.map(
                        (el, i) =>
                            <option key={i} value={el.code}>
                                {el.city}
                            </option>
                    )
                }
            </select>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseCity)