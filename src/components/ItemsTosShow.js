/**
 * Created by eugene on 07.02.17.
 */
import React from 'react'
import store from './../store.js'
import { connect } from 'react-redux'

import {setItemsToShow} from './../actions/setItemsToShow.js'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onClick: (event) => {
            dispatch(setItemsToShow(event))
        }
    };
};

const mapStateToProps = function() {
    let data = store.getState();
    
    return {
        data : data    
    }
};

class ItemsToShow extends React.Component {
    render()   {
        return (
            <ul className="items-to-show">
                {this.props.data.itemsShow.map(
                    (el, i) =>
                        <li key={i}>
                            <a onClick={this.props.onClick.bind(this)}
                               data-items={el}>
                                {el}
                            </a>
                        </li>
                )}
            </ul>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsToShow)