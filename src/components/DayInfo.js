/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import {setWeatherIcon} from './svg-icons.js'
import HumidityIcon from './../../assets/img/watering.png'
import Windicon from './../../assets/img/wind-sign.png'
import WindArrow from './../../assets/img/wind-arrow.png'

import {getDate} from './../actions/getDateParams.js'
import {getTime} from './../actions/getDateParams.js'
import {getDay} from './../actions/getDateParams.js'

class DayInfo extends React.Component {
    render() {
        let stamp = this.props.dt,
            weatherCode = this.props.weatherCode,
            windDegree = this.props.windDegree,
            degreeStyle = {
                transform: 'rotate('+windDegree+'deg)'
            };
        
        return (
            <div className="weather-info__item">
                <div className="weather-info__item__header">
                    <div className="weather-info__item__icon">
                        {setWeatherIcon(weatherCode)}    
                    </div>
                    <div className="weather-info__item__date">
                        <h4>
                            {getDate(stamp)}
                        </h4>   
                        <p>
                            {getDay(stamp)}, {getTime(stamp)}
                        </p>
                    </div>
                </div>
                <div className="weather-info__item__text">
                    <div className="weather-info__item__description">
                        <div className="description">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div className="weather-info__item__temps">
                        <p>{this.props.temp_min} <sup>&deg;C</sup>
                            <span>...</span> {this.props.temp_max} <sup>&deg;C</sup>
                        </p>
                    </div>
                </div>
                <div className="weather-info__item__bottom">
                    <div className="weather-info__item__humidity">
                        <img src={HumidityIcon} alt="Humidity"/>
                        <p>{this.props.humidity} %</p>
                    </div>
                    <div className="weather-info__item__wind">
                        <img src={Windicon} alt="Wind"/>
                        <p>
                            {this.props.windSpeed} m/s
                        </p>
                        <div className="wind-direction">
                            <img src={WindArrow} alt="Wind direction" style={degreeStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayInfo;