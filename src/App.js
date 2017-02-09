import React from 'react'

import { connect } from 'react-redux'

import store from './store.js'
import Header from './components/Header.js'
import DayInfo from './components/DayInfo.js'

import ItemsToShow from './components/ItemsTosShow.js'

import {getData} from './getData.js'

import './App.css';

class Weather extends React.Component {
    componentDidMount() {
        getData();
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
