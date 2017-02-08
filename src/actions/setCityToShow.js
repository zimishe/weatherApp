/**
 * Created by eugene on 07.02.17.
 */

export function setCityToShow(event) {
    return {
        type: 'CHANGE_CITY', receivedCity : parseInt(event.target.value, 10)
    }
}


