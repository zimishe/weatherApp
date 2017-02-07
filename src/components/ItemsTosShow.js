/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'
import {setItemsToShow} from './../actions/setItemsToShow.js'

class ItemsToShow extends React.Component {
    constructor(props) {
        super(props);

        this.setItemsNumber = this.setItemsNumber.bind(this);
    }

    setItemsNumber(event) {

        let dataReceived = parseInt(event.target.getAttribute('data-items'));

        store.dispatch(setItemsToShow(dataReceived));
    }

    render()   {
        console.log('ooo', this.props);

        return (
            <ul className="items-to-show">
                {store.getState().itemsShow.map(
                    (el, i) =>
                        <li key={i}>
                            <a onClick={this.setItemsNumber.bind(this)}
                               data-items={el}>
                                {el}
                            </a>
                        </li>
                )}
            </ul>
        )
    }
}


export default ItemsToShow