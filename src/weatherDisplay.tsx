import * as React from "react";
import { connect } from 'react-redux';
import  { getFiveDayWeather } from './actionCreators';
import DaySummary from './daySummary';
import DayDetail from './dayDetail';

interface Props {
    weatherforecast: any;
    getFiveDayWeather(): void;
    
}
interface State {
    weatherforecast : any
}
interface MyInterface {
    max : number;
    min : number;
    humidity : number;
}

interface DayDetails {
    icon : string
    description : string
    day: string
    temp : Array<number>
    hourlyInfo : string
}

class WeatherDisplay extends React.Component<Props, State, MyInterface>{
    constructor(props: Props){
        super(props);        
        this.state = {
            weatherforecast: this.props.weatherforecast
        }
    }    
    componentDidMount(){        
        this.props.getFiveDayWeather(); 
    }
    _groupByDays = (dataWeather: ReadonlyArray<object>) => {
        return (dataWeather.reduce((list: any, item: any) => {
            const forecastDate = item.dt_txt.substr(0,10);
            list[forecastDate] = list[forecastDate] || [];
            list[forecastDate].push(item);      
            return list;
          }, {}));        
    };
    _getDayInfo = (data : ReadonlyArray<any>) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
    };

    _getIcon = (dataIcon : ReadonlyArray<any>) => { 
        let iconName = dataIcon[0].weather[0].icon;
        return `https://openweathermap.org/img/w/${iconName}.png`; 
    }
    _getWeatherDecription = (dataIconDesc : ReadonlyArray<any>) => { 
        let iconDescription = dataIconDesc[0].weather[0].description;
        return iconDescription; 
    }

    _getInfo = (data : ReadonlyArray<object>, min: Array<number> = [], max: Array<number> = [], humidity: Array<number> = []) => {
        
        
        
        data.map((item: any) => {
            max.push(item.main.temp_max);
            min.push(item.main.temp_min);
            humidity.push(item.main.humidity);
        });
        const  minMax = {
            min: Math.round(Math.min(...min)),
            max: Math.round(Math.max(...max))
        };
        const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);
        //let info =  ['max': minMax.max, 'min':minMax.min, 'humidity':avgHumdity];
        let info: Array<any> = [minMax.max,minMax.min,avgHumdity];
                
        return info;
    };

    render(){    
             
        let weatherforecastArr = [], weatherforecast: string = '', city : string ='', forecastTiles: Array<any> = [], dayInfo : Array<any> = [];
        if(this.props.weatherforecast.list !== undefined){ 
            weatherforecastArr = this.props.weatherforecast.list;
            if(weatherforecastArr.length === 0){
                weatherforecast = "No weather data to display";
            }
            
            city= this.props.weatherforecast.city.name;
            const forecasts  = this.props.weatherforecast.list;
            const latestForecast = this._groupByDays(forecasts);
            
            const tiles = Object.keys(latestForecast).map(key => latestForecast[key]);
            
            forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
            if(forecastTiles.length !== 0 ) {
                dayInfo = forecastTiles.map((item, i) => { 
                                       
                    let dayObj = {} as DayDetails;
                    dayObj['icon'] = this._getIcon(item);
                    dayObj['description'] = this._getWeatherDecription(item);
                    dayObj['day'] = this._getDayInfo(item);
                    dayObj['temp'] = this._getInfo(item);
                    dayObj['hourlyInfo'] = item;
                    return dayObj;
                })
            }
        }

        return(
            <div className="container">   
                <h1>5 Day Weather Forecast Application</h1>                
                <div>{city}</div>
                <ul className="nav nav-tabs">
                {(dayInfo.length > 0 && dayInfo.length !== undefined) ? dayInfo.map((item, i) => { return <DaySummary info={item} key={i} keyindex={i} /> }) : ''  }
                </ul>
                <div className="tab-content">
                {(dayInfo.length > 0 && dayInfo.length !== undefined) ? dayInfo.map((item, i) => { return <DayDetail dayitem={item.hourlyInfo} dayindex={i} key={i} /> }) : ''  }
                </div>
            </div>                
        );
    }
}

let mapStateToProps = (reduxState:any) => {
    return {
        weatherforecast: reduxState.weatherforecast
    }
}
export default connect(mapStateToProps, {getFiveDayWeather})(WeatherDisplay);