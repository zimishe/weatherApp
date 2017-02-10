/**
 * Created by eugene on 10.02.17.
 */

export function getDate(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000),
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        year = a.getFullYear(),
        month = months[a.getMonth()],
        date = a.getDate();

    return date + ' ' + month + ' ' + year;
}

export function getTime(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000),
        hour = ('0'+a.getHours()).slice(-2),
        min = ('0'+a.getMinutes()).slice(-2);

    return hour + ':' + min;
}

export function getDay(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000),
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        dayOfWeek = days[a.getDay()];

    return dayOfWeek ;
}
