/**
 * Created by eugene on 07.02.17.
 */

export function setItemsToShow(receivedItems) {
    return {
        type: 'SET_ITEMS_TO_SHOW', receivedItems : receivedItems
    }
}