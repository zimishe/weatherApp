import React from 'react'

import { connect } from 'react-redux'

import store from './store.js'
import Header from './components/Header.js'
import DayInfo from './components/DayInfo.js'
import ChooseCity from './components/ChooseCity.js'
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

        return (
            <div className="data">
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
                            />
                        )
                    }

                </div>
                <ItemsToShow />
                <ChooseCity />
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
