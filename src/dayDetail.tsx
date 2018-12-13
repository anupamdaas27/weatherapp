import * as React from "react";
import './App.css';
import DisplayHours from './displayHours';

export interface Props {
    dayitem: ReadonlyArray<object>
    dayindex: number
  }
  
  interface State {
    dayitem : ReadonlyArray<object>,
    dayindex: number
  }
  interface DayInfo {
    main : string
    dt: string
  }

  interface dDetail {
    temp: string
    time: string
    icon : string
    description : string
    windspeed : string
}
class DayDetail extends React.Component<Props, State, DayInfo> {
    constructor(props: Props){
        super(props);
        this.state = {
            dayitem :this.props.dayitem,
            dayindex: this.props.dayindex   
        }

       
        //let dayDetailAll: Array<any> = [];
        this._getHourlyInfo = this._getHourlyInfo.bind(this);
        this.getHour = this.getHour.bind(this);
        this.getDate = this.getDate.bind(this);
    }
    
    getHour = (time:number) => time ? new Date(time).getHours() : new Date().getHours();
    getDate = (date: string) => date ? new Date(date).getDate() : new Date().getDate();
    _getHourlyInfo = ( dayinfo : ReadonlyArray<object>) => {
        let tempntime: Array<any> = [];
        let dayDetailAll: Array<any> = []; 
        tempntime = dayinfo.map((itemDay: any) => {
            let dayDetail = {} as dDetail;   
            dayDetail.temp = Math.round(itemDay.main.temp) + `°C`;
            dayDetail.time = this.getHour(itemDay.dt * 1000) + `:00`;
            dayDetail.icon = itemDay.weather[0].icon;
            dayDetail.description = itemDay.weather[0].description;
            dayDetail.windspeed = itemDay.wind.speed;
            return dayDetail;
        })
        dayDetailAll = tempntime;
        return   dayDetailAll;      
    } 
    render() {
        let hoursInfo: Array<any> = [];
        hoursInfo = this._getHourlyInfo(this.state.dayitem);
        return ( 
            <div className="tab-pane container" id={`day${this.state.dayindex}`}>          
            <DisplayHours hoursdata={hoursInfo} hoursindex={this.state.dayindex} key={this.state.dayindex}/>
            </div>
        );
    }
}

export default DayDetail;
