/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'

class ChooseCity extends React.Component {
    constructor(props) {
        super(props);

        this.setCity = this.setCity.bind(this)
    }

    setCity(event) {
        /* let receivedCity = event.target.value.toString();

         getData(receivedCity);
         store.dispatch(setCityToShow(receivedCity));

         this.forceUpdate() */
    }

    render() {
        let currentCity = store.getState().cityToShow;

        return (
            <select className="city-select" value={currentCity} onChange={this.setCity.bind(this)}>
                {
                    store.getState().citiesList.map(
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

export default ChooseCity