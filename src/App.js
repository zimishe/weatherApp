import React from 'react'

import { connect } from 'react-redux'

import store from './store'
import Header from './components/Header'
import DayInfo from './components/DayInfo'

import ItemsToShow from './components/ItemsTosShow'

import './App.css';

class Weather extends React.Component {
    componentDidMount() {
   
    }
    
    componentWillReceiveProps() {
        // console.log('wr');
    }

    render() {
        let data = this.props.data,
            itemsToShow = data.itemsToShow,
            weatherInfoDetailed = data.weatherData.list.filter(
                (el, i) => i < itemsToShow
            );

        console.log('data', data.weatherData);
        
        return (
            <div className="data container">
                <Header />
                <div className="weather-info">
                    {
                        weatherInfoDetailed.map(
                            (el, i) => <DayInfo
                                key={i}
                                date={el.dt_txt}
                                dt={el.dt}
                                temp_min={el.main.temp_min}
                                temp_max={el.main.temp_max}
                                humidity={el.main.humidity}
                                clouds={el.clouds.all}
                                weatherCode={el.weather[0].id}
                                description={el.weather[0].description}
                                windDegree={el.wind.deg}
                                windSpeed={el.wind.speed}
                            />
                        )
                    }

                </div>
                <ItemsToShow />
            </div>
        )
    }
}

const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

export default connect(
    mapStateToProps
)(Weather)
