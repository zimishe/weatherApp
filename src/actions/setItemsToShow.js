/**
 * Created by eugene on 07.02.17.
 */

export function setItemsToShow(event) {
    // eslint-disable-next-line
    let dataReceived = parseInt(event.target.getAttribute('data-items'));
    
    return {
        type: 'SET_ITEMS_TO_SHOW', receivedItems : dataReceived
    }
}