/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'

class DayInfo extends React.Component {
    render() {

        return (
            <div className="weather-info__item">
                <div className="weather-info__item__date">
                    <p>
                        {this.props.date}
                    </p>
                </div>
                <div className="weather-info__item__temps">
                    <p>Temperatures:</p>
                    <div className="temp--min">
                        <p>min:</p>
                        <p>{this.props.temp_min} &deg;C</p>
                    </div>
                    <div className="temp--max">
                        <p>max:</p>
                        <p>{this.props.temp_max} &deg;C</p>
                    </div>
                </div>
                <div className="weather-info__item__humidity">
                    <p>Humidity:</p>
                    <div className="humidity">
                        <p>{this.props.humidity} %</p>
                    </div>
                </div>
                <div className="weather-info__item__clouds">
                    <p>Clouds:</p>
                    <div className="clouds">
                        <p>{this.props.clouds} %</p>
                    </div>
                </div>
                <div className="weather-info__item__description">
                    <p>Description:</p>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="weather-info__item__wind">
                    <p>Wind:</p>
                    <div className="description">
                        <p>{this.props.windSpeed} m/s, {this.props.windDegree}&deg;</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayInfo;