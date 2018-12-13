import "isomorphic-fetch";
import promise from 'es6-promise';
promise.polyfill()

export const GET_FIVE_DAY_WEATHER = "GET_FIVE_DAY_WEATHER";


export function displayWeatherForecast(data: any){
    return {
        type: GET_FIVE_DAY_WEATHER ,
        data
    }
}

export function getFiveDayWeather(){
    return (dispatch: any) => {
        return fetch("http://api.openweathermap.org/data/2.5/forecast?id=2641181&units=metric&APPID=ca2e495f97736a5c91c5770c25775436")
        .then(res => res.json())
        .then(data => dispatch(displayWeatherForecast(data)))
        .catch(err => console.log(err))
    }
}
