import * as React from "react";
import './App.css';

   interface Props {
    hoursdata: ReadonlyArray<object>
    hoursindex: number
   }
  interface State {
    hoursdata : ReadonlyArray<object>,
    hoursindex: number
  }

class DisplayHours extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
        hoursdata : this.props.hoursdata,
        hoursindex : this.props.hoursindex
    }
    this.displayInfo = this.displayInfo.bind(this);
  }

  displayInfo = (itemDetailInfo: any, itemDetailIndex: number) => {
        
    return (    
        <div className="col" key={itemDetailIndex}>
            <div className="card">
                <h5 className="card-header">{itemDetailInfo.time}</h5>
                <div className="card-body">                    
                    <p className="card-text">{itemDetailInfo.temp}</p>
                    <p className="card-text"><img src={`https://openweathermap.org/img/w/${itemDetailInfo.icon}.png`} alt={itemDetailInfo.description} /></p>
                    <p className="card-text">{itemDetailInfo.windspeed}</p>
                    <p className="card-text">meter/sec</p>
                </div>
            </div>
        </div>
        );
  }
  render() {
     return (  
        <div className="row">
            {
                this.state.hoursdata.map((houritem : any , hourindex: number) => (
                        this.displayInfo(houritem, hourindex)
                ))
            }            
        </div>
    );
  }
}

export default DisplayHours;
