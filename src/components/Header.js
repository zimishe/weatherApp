/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'
import ChooseCity from './ChooseCity.js'

class Header extends React.Component {
    render() {
        // console.log('data', store.getState().weatherData);

        const cityName = store.getState().weatherData.city.name,
            countryCode = store.getState().weatherData.city.country;

        return (
            <div className="header">
                <div className="header__info">
                    <p>
                        Displaying weather in <strong>{cityName}, {countryCode}</strong>
                    </p>
                </div>
                <ChooseCity />
            </div>
        )
    }
}

export default Header


