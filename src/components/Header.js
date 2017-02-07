/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'

class Header extends React.Component {
    render() {
        // console.log('data', store.getState().weatherData);

        const cityName = store.getState().weatherData.city.name,
            countryCode = store.getState().weatherData.city.country;

        return (
            <div className="header">
                <p>Displaying weather in {cityName}, {countryCode}</p>
            </div>
        )
    }
}

export default Header


